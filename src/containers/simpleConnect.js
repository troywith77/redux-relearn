import React from 'react';
import PropTypes from 'prop-types';

const simpleConnect = (mapStateToProps, mapDispatchToProps) => (Component) => {
  class ConnectComponent extends React.Component {
    static contextTypes = {
      store: PropTypes.object
    }

    componentDidMount () {
      const { store } = this.context
      this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }

    componentWillUnmount () {
      this.unsubscribe()
    }

    render () {
      const { store } = this.context
      let props = {}
      if (mapStateToProps && typeof mapStateToProps === 'function') {
        props = {
          ...props,
          ...mapStateToProps(store.getState(), this.props)
        }
      }
      if (mapDispatchToProps && typeof mapDispatchToProps === 'function') {
        props = {
          ...props,
          ...mapDispatchToProps(store.dispatch, this.props)
        }
      } else {
        props = {
          ...props,
          dispatch: store.dispatch
        }
      }
      return (
        <Component
          {...this.props}
          {...props}
        />
      )
    }
  }
  return ConnectComponent
}

export default simpleConnect;