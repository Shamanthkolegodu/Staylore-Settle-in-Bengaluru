import React, { Component } from 'react';
import axios from 'axios';
import './general.css'
import Navbar2 from './navbar2.component';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeMessage= this.onChangeMessage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            email: '',
            message: '',
            status: '',
            msg: ''
        }
      }
      
      onChangeName(e) {
        this.setState({
            name: e.target.value
        })
      }
    
      onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
      }
    
      onChangeMessage(e) {
        this.setState({
            message: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();

        const message_details = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        }
        axios.post('http://localhost:5000/contact/support', message_details)
        .then(
          this.setState({status:'We will contact you soon. Thanks for waiting!'})
        );
        this.setState({msg:'Your query has been accepted.'})
        window.location='/about'
    }
  render() {
    return (
      <div className="bg-content">
      <Navbar2 />
        <div className="container">
        <h3 style={{color:"white"}}>Contact</h3>
        <br/>
        <form onSubmit={this.onSubmit} className="width-input">
          <div className="form-group"> 
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                placeholder = "Your Name"
                onChange={this.onChangeName}
                />
          </div>
          <div className="form-group"> 
            <input  type="email"
                required
                className="form-control"
                value={this.state.email}
                placeholder = "Your Email"
                onChange={this.onChangeEmail}
                />
          </div>
          <div className="form-group">
            <input 
                required
                type="message" 
                className="form-control"
                value={this.state.message}
                placeholder = "Tell us your query here"
                onChange={this.onChangeMessage}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Send Message" className="btn btn-primary" />
          </div>
          <h4 className="font">{this.state.msg}</h4>
        </form>
      </div>
      </div>
    )
  }
}
