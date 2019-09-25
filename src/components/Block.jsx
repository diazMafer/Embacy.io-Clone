import React, { Component } from 'react';
import '../css/first.css';

export default class Block extends Component{
    render(){
        return(
            <div className={this.props.name}>
                <div className="num">{this.props.num}</div>
            </div>
        )
    }
}