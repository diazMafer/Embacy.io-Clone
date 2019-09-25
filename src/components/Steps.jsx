import React, { Component } from 'react';
import '../css/first.css';

export default class Steps extends Component {
    render(){
        return(
            <div className="step-container">
                <div className="number-text">{this.props.step}</div>
                <h2>{this.props.description}</h2>
                <p className="par">{this.props.footer}</p>
            </div>

        )
    }
}