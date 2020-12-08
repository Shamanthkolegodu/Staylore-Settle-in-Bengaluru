import React, { Component } from 'react';
import axios from 'axios';
import './general.css';
import Navbar2 from "./navbar2.component";


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

export default class HousesForSale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      location: ''
    };
    this.onChangeValue = this.onChangeValue.bind(this);
  }
  onChangeValue(e) {
    const location_of_house = {
      location: e.target.value,
    }
    console.log(e.target.value);
    axios.post('http://localhost:5000/data/',location_of_house)
      .then(response => {
        this.setState({ houses: response.data })
        console.log("data recieved")
      })
      .catch((error) => {
        console.log(error);
      })
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
      <div onChange={this.onChangeValue}>
      <br/>
      <table className="radio-table">
        <tr>
            <td><input type="radio" value='Whitefield' name="location" className="radio-button-design"/>Whitefield</td>
            <td><input type="radio" value="Hebbal" name="location" className="radio-button-design"/> Hebbal</td>
            <td><input type="radio" value="Electronic City" name="location" className="radio-button-design"/> Electronic City</td>
            <td><input type="radio" value="Kengeri" name="location" className="radio-button-design"/> Kengeri</td>
        </tr>
        <tr>
        <td><input type="radio" value="Kanakpura Road" name="location" className="radio-button-design"/> Kanakpura Road</td>
        <td><input type="radio" value="Thanisandra" name="location" className="radio-button-design"/> Thanisandra</td>
        <td><input type="radio" value="1st Phase JP Nagar" name="location" className="radio-button-design"/> 1st Phase JP Nagar</td>
        <td><input type="radio" value="Kaval Byrasandra" name="location" className="radio-button-design"/> Kaval Byrasandra</td>
        </tr>
        <tr>
        <td><input type="radio" value="Brookefield" name="location" className="radio-button-design"/> Brookefield</td>
        <td><input type="radio" value="Ashwathnagar" name="location" className="radio-button-design"/> Ashwathnagar</td>
        <td><input type="radio" value="Raja Rajeshwari Nagar" name="location" className="radio-button-design"/> Raja Rajeshwari Nagar</td>
        <td><input type="radio" value="Attibele" name="location" className="radio-button-design"/> Attibele</td>
         </tr>
         <tr>
            <td><input type="radio" value='Vishveshwarya Layout' name="location" className="radio-button-design"/>Vishveshwarya Layout</td>
            <td><input type="radio" value="Mallasandra" name="location" className="radio-button-design"/> Mallasandra</td>
            <td><input type="radio" value="Vijayanagar" name="location" className="radio-button-design"/> Vijayanagar</td>
            <td><input type="radio" value="Hoodi" name="location" className="radio-button-design"/> Hoodi</td>
        </tr>
        <tr>
            <td><input type="radio" value='Hulimavu' name="location" className="radio-button-design"/>Hulimavu</td>
            <td><input type="radio" value="Frazer Town" name="location" className="radio-button-design"/> Frazer Town</td>
            <td><input type="radio" value="Venkatapura" name="location" className="radio-button-design"/> Venkatapura</td>
            <td><input type="radio" value="Kadugodi" name="location" className="radio-button-design"/> Kadugodi</td>
        </tr>
        </table>
        </div>
        <br/>
      </div>

        <h3 style={{'textAlign':'center'}}>Houses For Sale</h3>
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
