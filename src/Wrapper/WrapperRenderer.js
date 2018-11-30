import React from 'react';
import PropTypes from 'prop-types';
const { homepage } = require('../../package.json');
const withRedux = require('./Wrappers/withRedux');
const withIntl = require('./Wrappers/withIntl');

const propTypes = {
  /** You can pass `require('redux')` to provide redux to the autoconfiguration */
  redux: PropTypes.object,
  /** You can pass `require('react-redux')` to provide react-redux to the autoconfiguration */
  'react-redux': PropTypes.object,
  /** You can pass `require('react-intl')` to provide react-intl to the autoconfiguration */
  'react-intl': PropTypes.object,
  /** If passed, redux will be configured */
  reducer: PropTypes.func,
  /** If passed, react-intl.js will be configured */
  messages: PropTypes.object,
  /** Example will be passed as Wrapper children automatically. */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const defaultProps = {
  redux: null,
  'react-redux': null,
  'react-intl': null,
  reducer: null,
  messages: null,
};

export default class Wrapper extends React.PureComponent {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  state = {
    hocList: [],
  };

  componentWillMount() {
    const {
      redux,
      'react-redux': reactRedux,
      'react-intl': reactIntl,
      ...rest
    } = this.props;
    const { reducer, messages } = rest;
    const hocList = [];
    if (reducer) {
      if (!redux || !reactRedux) {
        throw new Error(`Wrapper: You need to pass the props \`redux\` and \`react-redux\` to use props \`reducer\`, see ${homepage}/#wrapper`);
      }
      hocList.push(withRedux({ redux, 'react-redux': reactRedux }, reducer));
    }
    if (messages) {
      if (!redux || !reactRedux || !reactIntl) {
        throw new Error(`Wrapper: You need to pass the props \`redux\`, \`react-redux\` and \`redux-intl\` to use props \`reducer\`, see ${homepage}/#wrapper`);
      }
      if (!reducer) {
        throw new Error(`Wrapper: \`react-intl\` can't work without a reducer, see ${homepage}/#wrapper`);
      }
      const { locale } = reducer();
      if (!locale) {
        throw new Error(`Wrapper: \`react-intl\` must have a locale set in redux store, see ${homepage}/#wrapper`);
      }
      hocList.push(withIntl({ 'react-intl': reactIntl }, locale, messages));
    }
    this.setState({
      hocList,
    });
  }

  render() {
    const { children } = this.props;
    if (this.state.hocList.length === 0) {
      return <div>{children}</div>;
    }
    let Component = null;
    let cursor;
    // eslint-disable-next-line no-cond-assign
    while (cursor = this.state.hocList.shift()) {
      Component = cursor(Component || 'div');
    }
    return <Component>{children}</Component>;
  }
}

