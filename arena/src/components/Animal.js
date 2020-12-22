import React, { Component } from 'react';
import AnimalConsumer from '../context';

class Animal extends Component {
  state = {
    isVisible: false,
  };

  onCardHeaderClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  onDeleteAnimal = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: 'DELETE_ANIMAL', payload: id });
  };

  render() {
    // Destructing
    const {id, commonName, spesificName, type, groupName, image } = this.props;
    console.log(this.props);
    const { isVisible } = this.state;
    return (
      <AnimalConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card" key={id}>
                <img
                  className="card-img-top"
                  src={ image }
                  alt={ commonName }
                />
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline" onClick={this.onCardHeaderClickEvent}>{commonName}</h4>
                  <i
                    className="far fa-trash-alt text-danger" style={{cursor:"pointer"}}
                    onClick={this.onDeleteAnimal.bind(this, dispatch)}
                  ></i>
                </div>

                  {
                    isVisible ?
                    <div className="card-body">
                    <p className="card-text"> Tür Adı: {spesificName} </p>
                    <p className="card-text"> Grup Adı: {groupName} </p>
                    <p className="card-text"> Cins: {type} </p>
                    </div>
                    : null
                  }
              </div>
            </div>
          );
        }}
      </AnimalConsumer>
    );
  }
}
export default Animal;
