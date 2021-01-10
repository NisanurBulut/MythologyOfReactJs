import React, { cloneElement, Component } from 'react';

export default class store extends Component {
  constructor(props) {
    super(props);

    // main app state
    this.state = {
      appName: 'Zeus',
    };
  }
  render() {
    return React.Children.map(this.props.children, (child) => {
      return cloneElement(child, {...this.state});
    });
  }
}
