import React, { Component } from 'react';
import Content from './ContentS1.jsx';
import '../css/first.css';

export default class firstSec extends Component {
    render(){
        const style ={
            paddingTop: `${this.props.padding}`
        }

      
        return(
            <div className="sect" style={style}>
                {this.props.num == "01" ? <h2 className="box">Here's how:</h2> : <div/>}
                <Content side={this.props.side} num={this.props.num} name={this.props.name} flex={this.props.flex} img={this.props.img} step={this.props.step} description={this.props.description} footer={this.props.footer} />
                
            </div>

        )
    }

}