/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;
  
    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode, basePath: `pages` });
      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  };

  exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
  
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  tags
                  templateKey
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          // result.errors.forEach(e => console.error(e.toString()));
          reject(result.errors);
          return;
        }
  
        const posts = result.data.allMarkdownRemark.edges;
  
        posts.forEach(edge => {
          const { id } = edge.node;
          createPage({
            path: edge.node.fields.slug,
            tags: edge.node.frontmatter.tags,
            component: edge.node.frontmatter.templateKey
              ? path.resolve(`./src/templates/${String(edge.node.frontmatter.templateKey)}.js`)
              : path.resolve(`./src/templates/chapter.js`),
            // additional data can be passed via context
            context: {
              id,
              slug: edge.node.fields.slug,
            },
          });
        });
  
        // Tag pages:
        let tags = [];
        // Iterate through each post, putting all found tags into `tags`
        posts.forEach(edge => {
          if (_.get(edge, `node.frontmatter.tags`)) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
  
        // Make tag pages
        tags.forEach(tag => {
          const tagPath = `/tags/${_.kebabCase(tag)}/`;
  
          createPage({
            path: tagPath,
            component: path.resolve(`./src/templates/tags.js`),
            context: {
              tag,
            },
          });
        });
        resolve();
      });
    });
  };
  

