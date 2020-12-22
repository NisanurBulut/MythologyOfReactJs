import React, { Component } from 'react';

class FormAddAnimal extends Component {
  render() {
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
        <div className="card-header">
            <h4 className="d-inline">Kayıt Formu</h4>
        </div>
        <div className="card-body">
            <form>
               <div className="form-group">
                   <label htmlFor="commonName">İsim</label>
                   <input type="text" name="commonName" id="id" className="form-control"></input>
               </div>
               <div className="form-group">
                   <label htmlFor="spesificName">Cins Adı</label>
                   <input type="text" name="spesificName" id="id" className="form-control"></input>
               </div>
               <div className="form-group">
                   <label htmlFor="groupName">Grup Adı</label>
                   <input type="text" name="groupName" id="id" className="form-control"></input>
               </div>
               <div className="form-group">
                   <label htmlFor="type">Tip</label>
                   <input type="text" name="type" id="id" className="form-control"></input>
               </div>
               <button className="btn btn-success btn-block" type="submit">Ekle</button>
            </form>
        </div>
        </div>
      </div>
    );
  }
}
export default FormAddAnimal;
