import React, { Component } from 'react';
import posed from 'react-pose';
import AnimalConsumer from '../context';
import axios from 'axios';

class FormUpdateAnimal extends Component {
  state = {
    commonName: '',
    spesificName: '',
    groupName: '',
    type: '',
    image: '',
  };
  changeAddForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  updateAnimal = async (dispatch, e) => {
    e.preventDefault();
  };
  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3001/animals/${id}`);
    const { commonName, spesificName, groupName, type, image } = response.data;
    this.setState({
        commonName, spesificName, groupName, type, image
    })
  };
  render() {
    const { commonName, spesificName, groupName, type, image } = this.state;
    return (
      <AnimalConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="mt-5 container-fluid">
              <div className="card justify-content-center">
                <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline">Kayıt Formu</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={this.updateAnimal.bind(this, dispatch)}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="commonName">Common Name</label>
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
                        <label htmlFor="spesificName">Spesific Name</label>
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
                        <label htmlFor="groupName">Group Name</label>
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
                        <label htmlFor="type">Type</label>
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
                        <label htmlFor="image">Image</label>
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
                    <button className="btn btn-success btn-block" type="submit">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </AnimalConsumer>
    );
  }
}
export default FormUpdateAnimal;
