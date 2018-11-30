/* eslint-disable */
/*
 *
 * LayoutRenderer
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
require('!!../../loaders/style-loader!../../loaders/css-loader!font-awesome/css/font-awesome.css'); // eslint-disable-line import/no-webpack-loader-syntax
import theme from '../theme';
import StyleGuideRenderer from '@bootstrap-styled/rsg-components/lib/StyleGuide/StyleGuideRenderer';
import badgeYeutech from '../static/badge-yeutech';
import LogoYeutech from '../static/logo-yeutech.svg';

/**
 * This is the main layout for the whole documentation.
 * It doesn't provide react-router but you could add it here.
 * @returns {XML}
 * @constructor
 */
class LayoutRenderer extends Component {
  componentWillMount() {
    // NOTE: we can't use componentWillMount if later we use react-router!
    if (this.props.ga.id) {
      ReactGA.initialize(this.props.ga.id, { debug: process.env.NODE_ENV === 'development' });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }
  render() {
    const { className, title, version, children, toc, hasSidebar, logoMenu, logoFooter } = this.props;
    return (
      <BootstrapProvider
        reset
        injectGlobal
        theme={theme}
      >
        <StyleGuideRenderer
          className={className}
          title={title}
          version={version}
          logoMenu={logoMenu}
          logoFooter={logoFooter}
          toc={toc}
          hasSidebar={hasSidebar}
        >
          {children}
        </StyleGuideRenderer>
      </BootstrapProvider>
    );
  }
}

LayoutRenderer.defaultProps = {
  title: 'rollup-documentation',
  className: null,
  ga: {
    id: null,
  },
  logoMenu: {
    logo: <LogoYeutech />,
    href: null,
    alt: 'Yeutech Company Limited logo',
  },
  logoFooter: {
    logo: badgeYeutech,
    href: null,
    alt: 'Yeutech Company Limited logo',
  }
};

LayoutRenderer.propTypes = {
  /** @ignore */
  className: PropTypes.string,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** The documentation title */
  title: PropTypes.string.isRequired,
  /** An instance of TableOfContentsRenderer */
  toc: PropTypes.node.isRequired,
  /** theme to be used by BootstrapProvider */
  theme: PropTypes.object,
  ga: PropTypes.shape({
    id: PropTypes.string,
  }),
  /** define if the sidebar should be displayed */
  hasSidebar: PropTypes.bool,
  /** Logo to use in sidebar menu */
  logoMenu: PropTypes.shape({
    logo: PropTypes.node,
    href: PropTypes.string,
    alt: PropTypes.string,
  }),
  /** Logo to use in footer */
  logoFooter: PropTypes.shape({
    logo: PropTypes.node,
    href: PropTypes.string,
    alt: PropTypes.string,
  }),
};

export default LayoutRenderer;
