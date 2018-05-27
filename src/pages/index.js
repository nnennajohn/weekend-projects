import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  // return (
  //   <div>
  //     <h1>Hi people</h1>
  //     <p>Welcome to your new Gatsby site.</p>
  //     <p>Now go build something great.</p>
  //     <Link to="/page-2/">Go to page 2</Link>
  //   </div>
  // )
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
        </div>
        {posts.map(({ node: post }) => (
          <div
            className="content"
            style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
            key={post.id}
          >
            <p>
              <Link className="has-text-primary" to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
              <span> &bull; </span>
              <small>{post.frontmatter.date}</small>
            </p>
            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className="button is-small" to={post.fields.slug}>
                Keep Reading →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;