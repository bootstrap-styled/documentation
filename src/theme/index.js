import { toMakeTheme } from 'bootstrap-styled/lib/utils';
import { makeTheme as makeThemeDocumentation } from '@rollup-umd/documentation/lib/theme';

export const makeTheme = toMakeTheme(
  makeThemeDocumentation({
    _name: 'bootstrap-styled-documentation',
    '$btn-primary-color': '#B31255',
    '$btn-primary-bg': '#1C00ff00',
    '$btn-primary-border': '#1C00ff00',
    '$btn-box-shadow': '#1C00ff00 !important',
    '$headings-font-family': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    '$headings-font-weight': 'normal',
    '$font-size-h1': '40px !important',
    '$font-size-h2': '30px !important',
    '$font-size-h3': '24px',
    '$font-size-h4': '20px',
    '$font-size-h5': '18px',
    '$font-size-h6': '16px',
    '$headings-line-height': '2',
    '$headings-color': 'inherit',
    '$link-color': '#3A007D',
    '$link-decoration': 'none',
    '$link-hover-color': '#B31255',
    '$link-hover-decoration': 'none',
    '$code-color': '#333',
    '$table-cell-padding': '0',
    '$table-border-width': '0',
    '$input-padding-x-sm': '1rem',
    '$input-padding-y-sm': '.75rem',
    styleguide: {
      '$nav-styleguide-bg-color': 'white',
      '$nav-styleguide-border': '1px solid #CCC',
      '$nav-styleguide-width': {
        sm: '100%',
        md: '260px',
      },
      '$rsg-color-gradient': 'linear-gradient(#2EA698, #6942A4)',
      '$rsg-heading-margin': '0 0 2rem 0',
      '$rsg-component-list-heading-color': '#6942A4',
      '$rsg-toc-form-background': '#6942A4',
      '$rsg-heading-color': '#6942A4',
      '$rsg-section-heading-anchor-color': '#6942A4',
      '$rsg-section-heading-1-link-color': '#6942A4',
      '$rsg-section-heading-2-link-color': 'blue',
      '$rsg-section-heading-section-name-color': '#6942A4',
      '$rsg-section-heading-1-color': '#6942A4',
      '$rsg-section-heading-2-color': '#6942A4',
    },
  })
);

export default makeTheme();
