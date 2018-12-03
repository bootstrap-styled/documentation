import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleGuideRenderer from '@rollup-umd/documentation/lib/Layout';
import theme from '../theme';

export default class LayoutRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    theme,
    ga: process.env.GA_ID,
    logoMenu: {
      logo: null,
      href: null,
      alt: 'Bootstrap Styled',
    },
    logoFooter: {
      logo: null,
      href: null,
      alt: 'Bootstrap Styled',
    },
  };

  static propTypes = {
    /** Our edited theme */
    theme: PropTypes.object,
    /** Google analytics configuration */
    ga: PropTypes.shape({
      /** Google analytics id */
      id: PropTypes.string,
    }),
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

  render() {
    const { ...rest } = this.props;
    return (
      <StyleGuideRenderer {...rest} />
    );
  }
}
