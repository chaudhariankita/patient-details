import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Patient Details</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Patient List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">ADD Patient</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Username</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}