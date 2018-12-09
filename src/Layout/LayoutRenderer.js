import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LayoutRendererOriginal from '@rollup-umd/documentation/lib/Layout';
import { homepage } from '../../package.json';
import theme from '../theme';
import logo from '../static/bs-logo.png';

const defaultProps = {
  theme,
  logoMenu: {
    logo,
    href: null,
    alt: 'Bootstrap Styled Logo',
    width: '50%',
    className: 'pb-2',
  },
};

// eslint-disable-next-line react/prefer-stateless-function
export default class LayoutRendererBootstrap extends Component {
  static propTypes = {
    theme: PropTypes.object,
    logoMenu: PropTypes.shape({
      logo: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
      ]),
      href: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.string,
      className: PropTypes.string,
    }),
  };

  static defaultProps = defaultProps;

  render() {
    const { logoMenu, ...rest } = this.props;
    // allow merge
    const logoMenuFinal = {
      ...defaultProps.logoMenu,
      ...logoMenu,
    };
    return (
      <LayoutRendererOriginal
        logoMenu={logoMenuFinal}
        {...rest}
      />
    );
  }
}
