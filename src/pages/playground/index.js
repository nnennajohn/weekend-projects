import React from 'react';
import Helmet from 'react-helmet';

const PlaygroundPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <section className="section">
    <Helmet title={`Playground | ${title}`} />
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1" style={{ marginBottom: '6rem' }}>
          <h1 className="title is-size-2 is-bold-light">Tags</h1>
          <p>This is just a test playground page</p>
        </div>
      </div>
    </div>
  </section>
);

export default PlaygroundPage;

export const playgroundPageQuery = graphql`
  query PlaygroundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
