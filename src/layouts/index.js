import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import Navbar from '../components/Navbar';
import styled, { css } from 'styled-components';
// import './index.css'

import Header from '../components/Header';
import Footer from '../components/Footer';

import { injectGlobalStyles } from '../components/shared/global';

injectGlobalStyles();

const HeaderWrapper = styled(Header)`
  ${props =>
    props.home &&
    css`
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    `};
`;

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <HeaderWrapper
      title={data.site.siteMetadata.title}
      githubUrl={data.site.siteMetadata.githubUrl}
      inverse={location.pathname === '/'}
      home={location.pathname === '/'}
    />
    {/* <Navbar /> */}
    <div
      style={{
        margin: '100px auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
  location: PropTypes.any,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        githubUrl
        permalink
      }
    }
  }
`;
