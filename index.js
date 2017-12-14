import React from 'react';
import PropTypes from 'prop-types';

export class OnlineListener extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onOnline: PropTypes.func.isRequired,
    onOffline: PropTypes.func.isRequired
  }

  componentDidMount() {
    window.addEventListener('online', this.props.onOnline);
    window.addEventListener('offline', this.props.onOffline);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.props.onOnline);
    window.removeEventListener('offline', this.props.onOffline);
  }

  render() {
    return this.props.children;
  }
}

const useOnline = (onOnline, onOffline) => ({
  renderRouteComponent: (children, props) => (
    <OnlineListener
      {...props}
      onOnline={onOnline}
      onOffline={onOffline}
      children={children} />
  )
});

export default useOnline;
