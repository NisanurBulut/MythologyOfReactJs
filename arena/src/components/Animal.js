import React, { Component } from 'react';
import AnimalConsumer from '../context';

class Animal extends Component {
  state = {
    formVisible: false,
    cardVisible: false,
  };

  viewCardDetails = (e) => {
    this.setState({
      cardVisible: !this.state.cardVisible,
    });
  };
  onDeleteAnimal = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: 'DELETE_ANIMAL', payload: id });
  };
  onAddAnimal = (dispatch, e) => {
    dispatch({ type: 'OPEN_FORM', payload: true });
  };
  componentWillUnmount() {
    console.log('component will unmount');
  }
  render() {
    // Destructing
    const { commonName, spesificName, type, groupName, image } = this.props;
    const { cardVisible } = this.state;
    return (
      <AnimalConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card text-white bg-dark mb-3">
              <div className="card-header d-flex justify-content-between">
                <h4 className="d-inline">{commonName}</h4>
                <div style={{ cursor: 'pointer' }}>
                  <div className="btn-group-sm">
                    <button
                      className="btn btn-primary mr-1"
                      onClick={this.viewCardDetails}
                    >
                      <i className="fa fa-eye"></i>
                    </button>
                    <button
                      className="btn btn-success mr-1"
                      onClick={this.onAddAnimal.bind(this, dispatch)}
                    >
                      <i className="fa fa-plus-square"></i>
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={this.onDeleteAnimal.bind(this, dispatch)}
                    >
                      <i className="far fa-trash-alt text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className="card-img-top"
                src={image}
                alt={commonName}
                style={{ height: '220px', width: '100%' }}
              />

              <div className="card-body">
                <div className="card-text">
                  {cardVisible ? (
                    <div className="card-body">
                      <p className="card-text"> Tür Adı: {spesificName} </p>
                      <p className="card-text"> Grup Adı: {groupName} </p>
                      <p className="card-text"> Cins: {type} </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        }}
      </AnimalConsumer>
    );
  }
}
export default Animal;
