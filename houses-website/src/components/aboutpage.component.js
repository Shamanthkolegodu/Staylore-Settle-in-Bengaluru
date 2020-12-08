import React, { Component } from 'react';
import './general.css';
import Navbar2 from "./navbar2.component"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const pics = [
	{
		name:"pic1",
		url:"https://mk0homznspaceco9ygoq.kinstacdn.com/wp-content/uploads/2016/12/Sowparnika-Purple-Rose.jpg"
	},
	{
		name:"pic2",
		url:"https://static.squareyards.com/resources/images/bangalore/project-image/v2-poorvi-enclave-project-large-image2.jpg"
	},
	{
		name:"pic3",
		url:"https://i.pinimg.com/originals/ed/18/2e/ed182e07ee084e7006e07f024a37773e.jpg"
	},
	{
		name:"pic4",
		url:"https://static.squareyards.com/resources/images/pune/project-image/kumar-city-bungalows-project-project-large-image1.jpg"
	},
	{
		name:"pic5",
		url:"https://static.squareyards.com/resources/images/pune/project-image/kolte-patil-life-republic-twin-bungalows-project-project-large-image1.jpg"
	},
	{
		name:"pic6",
		url:"https://i.pinimg.com/originals/40/4d/2c/404d2c1bc5c684f910bea99754cd9925.jpg"
	}
]

export default class AboutPage extends Component {
  render() {

  	const settings = {
  		dots:true,
  		fade:true,
  		infinite:true,
  		speed:500,
  		slidesToShow:1,
  		arrows:true,
  		slidesToScroll:1,
  		className:"slides"
  	}

    return (
      <div class="bggg">
        <Navbar2 />
      <div className="container">
          <br/>
          <Slider {...settings}>

        {pics.map((pic) => {
        	return (
        		<div>
        			<img width="100%" src= {pic.url} />
        		</div>
          )
        }

        )}
        </Slider>
        		<br/>
        <div>
				<h2>Our Team</h2>
				<div class="row">

				  <div class="column">
				    <div class="card">
				      <img src="https://i.ibb.co/wJMnRZF/profile.jpg" alt="Shamanth" width="100%"/>
				      <div class="container">
				        <h2>Shamanth</h2>
				        <p>Student of PES University</p>
				        <a href="https://github.com/Shamanthkolegodu">Github Profile</a>
				      </div>
				    </div>
				  </div>

				  <div class="column">
				    <div class="card">
				      <img src="https://i.ibb.co/Lx38rVx/Whats-Appimg.jpg" alt="Sanjiv" width="100%"/>
				      <div class="container">
				        <h2>Sanjiv</h2>
				        <p>Student of PES University</p>
				        <a href="https://github.com/Sanjiv01">Github Profile</a>
				      </div>
				    </div>
				  </div>

				  <div class="column">
				    <div class="card">
				      <img src="https://i.ibb.co/wYNtxJD/1607248166369-min.jpg" alt="Sahana" width="100%"/>
				      <div class="container">
				        <h2>Sahana</h2>
				        <p>Student of PES University</p>
				        <a href="https://github.com/naixing16">Github Profile</a>
				      </div>
				    </div>
				  </div>

				</div>

			  </div>
        </div>
      </div>
    )
  }
}

