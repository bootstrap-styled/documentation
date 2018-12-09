import React from 'react';
import LayoutRendererOriginal from '@rollup-umd/documentation/lib/Layout';
import { homepage } from '../../package.json';
import logo from '../../src/static/bs-logo.png';
import theme from '../theme';

export default (props) => (
  <LayoutRendererOriginal
    theme={theme}
    className="pb-1"
    logoMenu={{
      logo,
      href: homepage,
      alt: 'Bootstrap Styled Logo',
      width: '50%',
    }}
    {...props}
  />
);
