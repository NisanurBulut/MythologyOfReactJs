import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

function Navbar({title}) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
       <div className="container-fluid">
         <Link to="/" className="navbar-brand">{title}</Link>
     <div className="justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to ={`/form/${0}`}  className="nav-link">Add</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contribute">Contribute</Link>
        </li>
      </ul>
      </div>
      </div>
    </nav>
  );
}
Navbar.propTypes={
  title:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:"Arena App"
}
export default Navbar;