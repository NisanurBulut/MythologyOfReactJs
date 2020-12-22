import React, { Component } from 'react';
import posed from 'react-pose';
import AnimalConsumer from '../context';

var uniqid = require('uniqid');
const AnimBox = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: 'block',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});
class FormAddAnimal extends Component {

  state = {
    visible: false,
    commonName: '',
    spesificName: '',
    groupName: '',
    type: '',
    image:''
  };
  closeForm = (dispatch, e) => {
    dispatch({ type: 'OPEN_FORM', payload: false });
  }

  changeAddForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  addAnimal = (dispatch,e) => {
    e.preventDefault()
    const { commonName, spesificName, groupName, type,image } = this.state;
    const newAnimal = {
      id: uniqid(),
      commonName: commonName,
      spesificName: spesificName,
      groupName: groupName,
      type: type,
      image: image,
    };
    dispatch({ type: 'ADD_ANIMAL', payload: newAnimal });
    dispatch({ type: 'OPEN_FORM', payload: false }); // kayıt işleminden sonra form kapansın
  };
  render() {
    const {commonName,spesificName,groupName,type,image} = this.state;
    return (
      <AnimalConsumer>
        {(value) => {
          const {dispatch } = value;
          const {visible } = value;
          return (
            <div className="col-md-8 mb-4">
              <AnimBox pose={visible ? 'visible' : 'hidden'}>
                <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline">Kayıt Formu</h4>
                 <div style={{cursor:"pointer"}}>
                 <button className="btn btn-xs"  onClick={this.closeForm.bind(this,dispatch)}>
                 <i className="fa fa-times-circle"></i>
                 </button>
                 </div>
                </div>
                  <div className="card-body">
                    <form onSubmit={this.addAnimal.bind(this, dispatch)}>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="commonName">İsim</label>
                          <input
                            type="text"
                            name="commonName"
                            id="id"
                            className="form-control"
                            value={commonName}
                            onChange={this.changeAddForm}
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="spesificName">Cins Adı</label>
                          <input
                            type="text"
                            name="spesificName"
                            id="id"
                            className="form-control"
                            value={spesificName}
                            onChange={this.changeAddForm}
                          ></input>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="groupName">Grup Adı</label>
                          <input
                            type="text"
                            name="groupName"
                            id="id"
                            className="form-control"
                            value={groupName}
                            onChange={this.changeAddForm}
                          ></input>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="type">Tip</label>
                          <input
                            type="text"
                            name="type"
                            id="id"
                            className="form-control"
                            value={type}
                            onChange={this.changeAddForm}
                          ></input>
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="image">Fotoğraf</label>
                          <input
                            type="text"
                            name="image"
                            id="id"
                            className="form-control"
                            value={image}
                            onChange={this.changeAddForm}
                          ></input>
                        </div>
                      </div>
                      <button
                        className="btn btn-success btn-block"
                        type="submit"
                      >
                        Kaydet
                      </button>
                    </form>
                  </div>
                </div>
              </AnimBox>
            </div>
          );
        }}
      </AnimalConsumer>
    );
  }
}
export default FormAddAnimal;
