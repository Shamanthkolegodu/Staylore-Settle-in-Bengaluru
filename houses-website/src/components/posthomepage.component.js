import React, { Component } from 'react';
import './general.css'

export default class Post extends Component{
    constructor(props) {
        super(props);
      }
    render(){
        return(
            <div className="content-design shadow p-5 mb-5 rounded">
                <div className="media">
                    <div className="media-body">
                        <h2 className="mt-0">{this.props.content.title}</h2>
                        <h4>{this.props.content.description}</h4>
                    </div>
                </div>
            </div>
        ) 
}
}