import React, { Component } from 'react';
import AnimalConsumer from '../context';

class Animal extends Component {
  state = {
    isVisible: false,
  };

  viewCardDetails = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    })
  }
  onDeleteAnimal = (dispatch, e) => {
    const { id } = this.props;
    dispatch({ type: 'DELETE_ANIMAL', payload: id });
  }

  render() {
    // Destructing
    const {id, commonName, spesificName, type, groupName, image } = this.props;
    const { isVisible } = this.state;
    return (
      <AnimalConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-4">
              <div className="card">
              <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline">{commonName}</h4>
                 <div style={{cursor:"pointer"}}>
                 <div class="btn-group-xs">
                 <button className="btn btn-xs btn-primary mr-1"  onClick={this.viewCardDetails}>
                 <i className="fa fa-eye"></i>
                 </button>
                 <button className="btn btn-xs btn-success mr-1" >
                 <i className="fa fa-plus-square"></i>
                 </button>
                 <button className="btn btn-xs btn-danger mr-1"  onClick={this.onDeleteAnimal.bind(this, dispatch)}>
                 <i className="far fa-trash-alt text-white"></i>
                 </button>
</div>
                 </div>
                </div>
                <div className="mt-2 text-center">
                <img
                  className="card-img-top"
                  style={{width: "18rem"}}
                  src={ image }
                  alt={ commonName }
                />
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
