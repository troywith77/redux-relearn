import React from 'react';
import PropTypes from 'prop-types';

export default class Provider extends React.Component {
  getChildContext () {
    return {
      store: this.props.store
    }
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  render () {
    return this.props.children;
  }
};
