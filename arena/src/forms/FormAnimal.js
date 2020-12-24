import React, { Component } from 'react';
import AnimalConsumer from '../context';
import axios from 'axios';

class FormAnimal extends Component {
  state = {
    error: '',
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
  validateForm = () => {
    const { commonName, spesificName, groupName, type, image } = this.state;
    if (
      commonName === '' ||
      spesificName === '' ||
      groupName === '' ||
      type === '' ||
      image === ''
    )
      return false;
    else return true;
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.componentDidMount();
    }
  };
  componentDidMount = async () => {

    const { id } = this.props.match.params;
    if (Number.parseInt(id) === 0) {
      this.setState({
        commonName: '',
        spesificName: '',
        groupName: '',
        type: '',
        image: '',
      });
    } else {
      const response = await axios.get(`http://localhost:3001/animals/${id}`);
      const {
        commonName,
        spesificName,
        groupName,
        type,
        image,
      } = response.data;
      this.setState({
        commonName,
        spesificName,
        groupName,
        type,
        image,
      });
    }
  };
  submitForm = async (dispatch, e) => {
    e.preventDefault();

    const { commonName, spesificName, groupName, type, image } = this.state;
    const { id } = this.props.match.params;

    if(!this.validateForm())
    {
      this.setState({error:true})
      return;
    }

    const animalItem = {
      commonName: commonName,
      spesificName: spesificName,
      groupName: groupName,
      type: type,
      image: image,
    };

    if (Number.parseInt(id) === 0) {
      const postResponse = await axios.post(
        `http://localhost:3001/animals`,
        animalItem
      );
      dispatch({ type: 'ADD_ANIMAL', payload: postResponse.data });
    } else {
      var response = await axios.put(
        `http://localhost:3001/animals/${id}`,
        animalItem
      );
      dispatch({ type: 'UPDATE_ANIMAL', payload: response.data });
      // redirect to home
    }

    // redirect to home
    this.props.history.push('/');
  };
  render() {
    const { commonName, spesificName, groupName, type, image, error } = this.state;
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
                  {
                    error ?
                    <div className="alert alert-danger">
                    <p>Boş alan bırakmayınız</p>
                  </div>
                    :null
                  }
                  <form onSubmit={this.submitForm.bind(this, dispatch)}>
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
export default FormAnimal;
