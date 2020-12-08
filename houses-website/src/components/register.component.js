import React, { Component } from 'react';
import axios from 'axios';
import './general.css'
import Navbar from "./navbar.component"



export default class Register extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeUsername= this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeReEnterPassword = this.onChangeReEnterPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            reenterpw: '',
            error:''
        }
      }

      
      onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value
        })
      }
    
      onChangeLastName(e) {
        this.setState({
            lastname: e.target.value
        })
      }
    
      onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
      }
    
      onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
      }
      onChangeReEnterPassword(e) {
        this.setState({
            reenterpw: e.target.value
        })
      }
      onSubmit(e) {
        e.preventDefault();

        const register_details = {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          username: this.state.username,
          password: this.state.password,
          reenterpw: this.state.reenterpw,
        }
        axios.post('http://localhost:5000/register/add', register_details)
        .then(res => {
          if (res.data.s2==="Minimum Length = 8"){
            this.setState({error:"Minimum password Length = 8"})
          } else if(res.data.s1==="Password do not match"){
          this.setState({error:"Password and Re-Enter-Password do not match"})
          }
          else{
            window.location = '/login'
          }
         })
        // axios.post('http://localhost:5000/register/add', register_details)
        // .then(res => {
        //   if(res.data.s1==="Password do not match"){
        //   this.setState({error:"Password and Re-Enter-Password do not match"})
        //   }
        //   else{
        //     window.location = '/login'
        //   }
        // })
    }
  render() {
    return (
      <div class="bg-login-reg">
      <Navbar />
        <div className="container">
        <h3 className="font">Register</h3>
        <br/>
        <form onSubmit={this.onSubmit} className="width-input">
          <div className="form-group"> 
            <label className="font">First Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstname}
                placeholder = "Firstname"
                onChange={this.onChangeFirstName}
                />
          </div>
          <div className="form-group"> 
            <label className="font">Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.lastname}
                placeholder = "Lastname"
                onChange={this.onChangeLastName}
                />
          </div>
          <div className="form-group">
            <label className="font">User Name: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.username}
                placeholder = "Ex : noir@007"
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <label className="font">Password: </label>
            <input 
                required
                type="password" 
                className="form-control"
                value={this.state.password}
                placeholder = "Minimum length : 8"
                onChange={this.onChangePassword}
                />
          </div>
          <div className="form-group">
            <label className="font">Re-Enter Password: </label>
            <input 
                required
                type="password" 
                className="form-control"
                value={this.state.reenterpw}
                placeholder = "Re-enter the password"
                onChange={this.onChangeReEnterPassword}
                />
          </div>
          <br/>
          <h3 className="error-msg">{this.state.error}</h3>
          <br/>
          <div className="form-group">
            <input type="submit" value="Register User" className="btn btn-primary" />
          </div>
        </form>
      </div>
      </div>
    )
  }
}
