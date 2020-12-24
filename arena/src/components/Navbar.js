import React from 'react';
import PropTypes from "prop-types";
import {BrowserRouter as Router, Link} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
       <div class="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
     <div className="justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/add">Add</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link 3</a>
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