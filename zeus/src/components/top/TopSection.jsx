import React, { Component } from 'react';
import './TopSection.scss';
import Weather from './Weather';
import { Manager, Reference, Popper } from 'react-popper/di';
export default class TopSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top-container">
        <div className="title">Zeus</div>
        <Weather {...this.props} />

        <Manager>
          <Reference>
            {({ ref }) => (
              <button className="btn btn-select-place" ref={ref}>
                Select Place
              </button>
            )}
          </Reference>
          <Popper className="right">
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} data-placement={placement}>
                Popper Element
                <div ref={arrowProps.ref} style={arrowProps.style}></div>
              </div>
            )}
          </Popper>
        </Manager>
      </div>
    );
  }
}
