import React, { cloneElement, Component } from 'react';
import { EventEmitter } from "events";
export default class store extends Component {
  constructor(props) {
    super(props);
    this.eventEmitter = new EventEmitter();
    // main app state
    this.state = {
      appName: 'Zeus',
    };
  }
  render() {
    return React.Children.map(this.props.children, (child) => {
      return cloneElement(child, {
        ...this.state,
        eventEmitter: this.eventEmitter
      });
    });
  }
}
