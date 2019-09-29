import React, { Component } from 'react';
import '../css/landing.css';

export default class Card extends Component{
    render(){
        return(
            <a className="case" target="_blank">
                <img src={this.props.src} />
            </a>
        )
    }
}