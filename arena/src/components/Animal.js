import React, { Component } from 'react';
import AnimalConsumer from '../context';
import axios from "axios";
import {Link} from 'react-router-dom';

class Animal extends Component {
  state = {
    formVisible: false,
    cardVisible: false,
  };
  static defaultProps={
    "commonName":"",
    "spesificName":"",
    "groupName":"",
    "type":"",
    "image":""
  }
  viewCardDetails = (e) => {
    this.setState({
      cardVisible: !this.state.cardVisible,
    });
  };
  onDeleteAnimal = async (dispatch, e) => {
    const { id } = this.props;

    // delete request
    await axios.delete(`http://localhost:3001/animals/${id}`)

    // remove state
    dispatch({ type: 'DELETE_ANIMAL', payload: id });
  };

  componentWillUnmount() {
    console.log('component will unmount');
  }
  render() {
    // Destructing
    const { id, commonName, spesificName, type, groupName, image } = this.props;
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
                    <Link to ={`edit/${id}`}  className="btn btn-success mr-1">
                    <i className="fa fa-edit"></i>
                    </Link>

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
