import React from 'react';
import theme from '../theme';

const LayoutRendererOriginal = require('@rollup-umd/documentation/lib/Layout');

export default (props) => <LayoutRendererOriginal theme={theme} {...props} />;
