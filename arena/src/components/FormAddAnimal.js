import React, { Component } from 'react';
import posed from 'react-pose';

const AnimBox = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display:  "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});
class FormAddAnimal extends Component {
  state = {
    visible: false,
  };

  changeFormVisibility = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    const { visible } = this.state;

    return (
      <div className="col-md-8 mb-4">
        <button
          onClick={this.changeFormVisibility}
          className="mb-2 btn btn-dark btn-block"
        >
          {visible ? 'Formu Gizle' : 'Formu Aç'}
        </button>
        <AnimBox pose={visible ? 'visible' : 'hidden'}>
          <div className="card">
            <div className="card-header">
              <h4 className="d-inline">Kayıt Formu</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="commonName">İsim</label>
                    <input
                      type="text"
                      name="commonName"
                      id="id"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="spesificName">Cins Adı</label>
                    <input
                      type="text"
                      name="spesificName"
                      id="id"
                      className="form-control"
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
                    ></input>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="type">Tip</label>
                    <input
                      type="text"
                      name="type"
                      id="id"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <button className="btn btn-success btn-block" type="submit">
                  Kaydet
                </button>
              </form>
            </div>
          </div>
        </AnimBox>
      </div>
    );
  }
}
export default FormAddAnimal;
