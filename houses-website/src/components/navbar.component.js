import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './general.css'

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg nav-design">
      <a class="navbar-brand website-name" href="#">Staylore: Settle in Bengaluru</a>
      {/* <img src="./logo.jpeg" alt="Staylore: Settle in Bengaluru" width="200px"/> */}
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" className="nav-link nav-font">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link nav-font">Login</Link>
          </li>
          <li className="nav-item">
          <Link to="/register" className="nav-link nav-font">Register</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
