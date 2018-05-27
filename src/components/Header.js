import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled, { css } from 'styled-components';
import GitHubButton from 'react-github-button';

import 'react-github-button/assets/style.css';

import Logo from './Logo';
import { typography, spacing, pageMargins, breakpoint } from './shared/styles';

const NavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
`;

// prettier-ignore
const NavItem = styled.div`
  display: inline-flex;
  line-height: 3rem;
  height: 3rem;
  vertical-align: top;
  align-items: center;

  ${props => props.showDesktop && css`
    display: none;
    @media (min-width: ${breakpoint}px) {
      display: inline-flex;
    }
  `}

  ${props => props.showMobile && css`
    @media (min-width: ${breakpoint}px) {
      display: none;
    }
  `}
`;

// prettier-ignore
const NavGroup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  ${props => props.right && css`
    left: auto;
    right: 0;
  `}

  ${NavItem} + ${NavItem} {
    margin-left: ${spacing.padding.large}px;
  }
`;

// prettier-ignore
const Nav = styled.div`
  height: 3rem;
  position: relative;
  text-align: center;
	z-index: 3;
`;

const NavWrapper = styled.nav`
  ${pageMargins};
  padding-top: 12px;
  @media (min-width: ${breakpoint}px) {
    padding-top: 36px;
  }
`;

export default function Header({ githubUrl, inverse, ...props }) {
  const [namespace, repo] = githubUrl.match(/github.com\/(.*)\/(.*)$/).slice(1);
  return (
    <NavWrapper {...props}>
      <Nav>
        <NavGroup>
          <NavItem>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-item" to="/about">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-item" to="/products">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navbar-item" to="/playground">
              Playground
            </NavLink>
          </NavItem>
        </NavGroup>
        <NavGroup right>
          <NavItem>
            <GitHubButton type="stargazers" size="large" namespace={namespace} repo={repo} />
          </NavItem>
        </NavGroup>
      </Nav>
    </NavWrapper>
  );
}

Header.propTypes = {
  githubUrl: PropTypes.string,
  inverse: PropTypes.bool,
};

Header.defaultProps = {
  githubUrl: null,
  inverse: false,
};
