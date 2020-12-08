import React, { Component } from 'react';
import axios from 'axios';
import './general.css'
import Navbar from "./navbar.component"



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            error:''
       }
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
      onSubmit(e) {
        e.preventDefault();

        const login_details = {
          username: this.state.username,
          password: this.state.password,
        }
        axios.post('http://localhost:5000/users/login',login_details)
        .then(res =>{
          console.log(res)
          //console.log(res.data.username)
            if(res.data.st==='Successfull'){
              window.location = '/data'
            }else if(res.data.st==='Not found!'){
              this.setState({error:"Wrong Username, Try Again... or Register"});
              {console.log(this.state.error)}
            }else{
              this.setState({error:"Wrong Password, Try Again..."});
              {console.log(this.state.error)}
            }
          });
    }
  render() {
    return (
      <div class="bg-login-reg">
        <Navbar />
        <div className="container">
          <h3 className="font">Login</h3>
          <br/>
            <form onSubmit={this.onSubmit} className="width-input">            
              <div className="form-group">
              <h2 className="error-msg">{this.state.error}</h2>
                <label className="font">Username: </label>
                <input 
                    required
                    type="text" 
                    className="form-control"
                    value={this.state.username}
                    placeholder = "Username"
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
                    placeholder = "Password"
                    onChange={this.onChangePassword}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Login" className="btn btn-primary" />
              </div>
            </form>
            
      </div>
      </div>

    )
  }
}
