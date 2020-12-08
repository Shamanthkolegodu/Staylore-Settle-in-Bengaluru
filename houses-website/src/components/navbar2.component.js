import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './general.css'

export default class Navbar2 extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg nav-design" onLoad={() => this.setUsername()}>
      <h3 class="navbar-brand website-name" >Staylore: Settle in Bengaluru</h3>
      <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
          <Link to="/data/" className="nav-link nav-font">Houses</Link>
          </li>
          <li className="nav-item">
          <Link to="/predict" className="nav-link nav-font">Predict</Link>
          </li>
          <li className="nav-item">
          <Link to="/sell" className="nav-link nav-font">Sell House</Link>
          </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link nav-font add-padding">About</Link>
          </li>
          <li className = "nav-item">
          <Link to = "/contact" className = "nav-link nav-font">Contact</Link>
          </li>
          <li className="nav-item">
          <Link to="/" className="nav-link nav-font add-padding">Logout</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
