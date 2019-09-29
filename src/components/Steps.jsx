import React, { Component } from 'react';
import '../css/first.css';

export default class Steps extends Component {
    render(){
        return(
            <div className="step-container" style={this.props.style}>
                <div className="number-text" style={this.props.colorB}>{this.props.step}</div>
                <h2 style={this.props.colorH}>{this.props.description}</h2>
                <p className="par" style={this.props.colorP}>{this.props.footer}</p>
            </div>

        )
    }
}