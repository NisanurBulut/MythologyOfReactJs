import React from 'react';

function AddContact() {
  return (
    <form className="add-form">
      <div className="form-control">
        <input type="text" placeholder="contact"></input>{' '}
      </div>
      <div className="form-control">
        <input type="text" placeholder="birthDay"></input>{' '}
      </div>
      <input type="submit" value="save" className='btn btn-block' />
    </form>
  );
}

export default AddContact;
