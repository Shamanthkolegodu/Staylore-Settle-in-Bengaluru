import React, { Component } from 'react';
import axios from 'axios';
import './general.css';
import Navbar2 from "./navbar2.component"

export default class SellHouse extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeArea_type = this.onChangeArea_type.bind(this);
        this.onChangeAvailability = this.onChangeAvailability.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onChangeSociety = this.onChangeSociety.bind(this);
        this.onChangeTotal_sqft = this.onChangeTotal_sqft.bind(this);
        this.onChangeBath = this.onChangeBath.bind(this);
        this.onChangeBalcony = this.onChangeBalcony.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            area_type: '',
            availability: '',
            location: '',
            size: '',
            society: '',
            total_sqft:'',
            bath: '',
            balcony: '',
            price: '',
            status: ''
        }
      }

      onChangeArea_type(e) {
        this.setState({
            area_type: e.target.value
        })
      }

      onChangeAvailability(e) {
        this.setState({
            availability: e.target.value
        })
      }

      onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
      }
      
      onChangeSize(e) {
        this.setState({
            size: e.target.value
        })
      }
      
      onChangeSociety(e) {
        this.setState({
            society: e.target.value
        })
      }
      
      onChangeTotal_sqft(e) {
        this.setState({
            total_sqft: e.target.value
        })
      }
      
      onChangeBath(e) {
        this.setState({
            bath: e.target.value
        })
      }
      
      onChangeBalcony(e) {
        this.setState({
            balcony: e.target.value
        })
      }

      onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
      }
    
    
      onSubmit(e) {
        e.preventDefault();
        const sell_house = {
            area_type: this.state.area_type,
            availability: this.state.availability,
            location: this.state.location,
            size: this.state.size,
            society: this.state.society,
            total_sqft: this.state.total_sqft,
            bath: this.state.bath,
            balcony: this.state.balcony,
            price: this.state.price
      }
      axios.post('http://localhost:5000/sell/sellhouse', sell_house)
        .then(
          this.setState({'status':'House added to database sucessfully'})
        );
        window.location='/data'
    }
  render() {
    return (
      <div class="bg-content">
        <Navbar2 />
        <div className="container">
        <h3 className="font">Sell House</h3>
        <br/>
        <form onSubmit={this.onSubmit}>
        <div class="row">
          <div class="col-sm ">
          <div className="form-group"> 
            <label className="font">Area type </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.area_type}
                placeholder = "Area-type"
                onChange={this.onChangeArea_type}
                />
          </div>
          <div className="form-group"> 
            <label className="font">Availability: </label>
            <input  type="text"
                required
                className="form-control"
                placeholder = "Ready to move or DD-MM-YYYY (date available for moving in)"
                value={this.state.availability}
                onChange={this.onChangeAvailability}
                />
          </div>
          <div className="form-group">
            <label className="font">Location: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.location}
                placeholder = "Ex: Whitefield"
                onChange={this.onChangeLocation}
                />
          </div>
          <div className="form-group">
            <label className="font">Size: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.size}
                placeholder = "Ex : 3 BHK"
                onChange={this.onChangeSize}
                />
          </div>
          <div className="form-group">
            <label className="font">Society: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.society}
                placeholder = "Coomee"
                onChange={this.onChangeSociety}
                />
          </div>
          </div>
          <div class="col-sm">
          <div className="form-group">
            <label className="font">Total Sq. ft. : </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.total_sqft}
                placeholder = "Ex: 1250"
                onChange={this.onChangeTotal_sqft}
                />
          </div>
          <div className="form-group">
            <label className="font">Bath: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.bath}
                placeholder = "Ex: 2"
                onChange={this.onChangeBath}
                />
          </div>
          <div className="form-group">
            <label className="font">Balcony: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.balcony}
                placeholder = "Ex: 1"
                onChange={this.onChangeBalcony}
                />
          </div>
          <div className="form-group">
            <label className="font">Price: </label>
            <input 
                required
                type="text" 
                className="form-control"
                value={this.state.price}
                placeholder = "Ex: 30.2 (Interms of Lakh)"
                onChange={this.onChangePrice}
                />
          </div>
          <br/>
          <div className="form-group">
            <input type="submit" value="Sell House" className="btn btn-primary" />
          </div>
          <h5 className="form-group font">{this.state.status}</h5>
          </div>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
