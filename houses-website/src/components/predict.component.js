import React, { Component } from 'react';
import axios from 'axios';
import './general.css';
import Navbar2 from "./navbar2.component"

const Houses = props => (
  <tr>
    <td>{props.houses.area_type}</td>
    <td>{props.houses.availability}</td>
    <td>{props.houses.location}</td>
    <td>{props.houses.size}</td>
    <td>{props.houses.society}</td>
    <td>{props.houses.total_sqft}</td>
    <td>{props.houses.bath}</td>
    <td>{props.houses.balcony}</td>
    <td>{props.houses.price}</td>
  </tr>
)

export default class Predict extends Component {
    constructor(props) {
        super(props);
      
        this.onChangeBhk = this.onChangeBhk.bind(this);
        this.onChangeSqFeet = this.onChangeSqFeet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitRefresh = this.onSubmitRefresh.bind(this);

        
        this.state = {
            bhk: "",
            sqfeet: "",
            houses: []
        }
      }
      onChangeBhk(e) {
        this.setState({
            bhk: e.target.value
        })
      }
      onChangeSqFeet(e){
          this.setState({
              sqfeet: e.target.value
          })
      }
      onSubmitRefresh(e){
        e.preventDefault();
        window.location='/predict'
      }
      onSubmit(e) {
        e.preventDefault();
        const predict_house = {
            bhk: this.state.bhk,
            sqfeet: this.state.sqfeet
        }
        axios.post('http://localhost:5000/predict/price',predict_house)
        .then(res =>{
                this.setState({houses: res.data});
                //window.location = '/predict'
        });
      }
      housesForSale() {
        return this.state.houses.map(currenthouse => {
          return <Houses houses={currenthouse} key={currenthouse._id}/>;
        })
      }
  render() {
    return (
      <div class="bggg">
      <Navbar2 />
        <div className="container">
        <h3>Predict</h3>
        <br/>
        <h3>{this.state.price_}</h3>
        <form onSubmit={this.onSubmit} className="width-input">
          <div className="form-group">
            <label>Bhk: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.bhk}
                onChange={this.onChangeBhk}
                />
          </div>
          <div className="form-group">
            <label>Sq feet: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.sqfeet}
                onChange={this.onChangeSqFeet}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Predict House" className="btn btn-primary" />
          </div>
        </form>
        {/* <div className="form-group">
            <input type="button" value="refresh" className="btn btn-primary" onClick={this.onSubmitRefresh}/>
        </div> */}
      </div>
      <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Area Type</th>
              <th>Availability</th>
              <th>Location</th>
              <th>Size</th>
              <th>Society</th>
              <th>Total Sqft</th>
              <th>Bathrooms</th>
              <th>Balcony</th>
              <th>price(in Lakhs)</th>
            </tr>
          </thead>
          <tbody>
            { this.housesForSale() }
          </tbody>
        </table>
      </div>
    )
  }
}
