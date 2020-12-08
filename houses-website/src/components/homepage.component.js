import React, { Component } from 'react';
import Post from "./posthomepage.component"
import './general.css'
import Navbar from "./navbar.component"

const mainFeaturedPost = {
    title: 'COVID-19 impact on rentals: Investment properties to witness correction',
    description:
      "Prime rental markets across India have witnessed corrections of varying degrees, with businesses adopting remote working practices, to survive during the Coronavirus pandemic Buyers and investors who have invested in immovable assets in India’s rental markets, expecting handsome returns, are a disappointed lot presently."
  };
  
const featuredPost1 = {
    title: 'Will property prices crash in India due to the Coronavirus outbreak?',
    description:
      "The developer community in India has been in a tizzy after union minister of commerce and industry Piyush Goyal on June 3, 2020, said builders needed to sell housing projects at reduced prices and let go of the high-priced unsold stock. Will prices fall?"
    };
const featuredPost2 = {
    title: 'Loan moratorium: SC resumes hearing on petitions seeking interest waiver',
    description:
        "The RBI had permitted all banks to allow a moratorium of six months. This applied to all term-loans. Given that the worst of times may not be over for many borrowers, many are in favour of extending the moratorium till December 31, 2020."
    };
export default class HomePage extends Component {
    render() {
        return(
            <div>
            <Navbar />
            <div className="backg-img-intro">
                <div>
                    <p className="web-name name-box">Staylore</p>
                    <p className="web-tagname name-box-tag">Settle in Bengaluru</p>

                </div>
            </div>
        <div className="backg-img">
            <br/>
            <div class="container">
                <div class="row">
                    <div class="col-sm content-design-bg">
                        <Post content={mainFeaturedPost}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm content-design-bg">
                        <Post content={featuredPost1}/>
                    </div>
                    <div class="col-sm content-design-bg">
                        <Post content={featuredPost2}/>
                    </div>
                </div>
            </div>
            </div>
            </div>
        ) 
    }
}