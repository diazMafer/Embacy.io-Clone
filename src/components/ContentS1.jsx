import React, { Component } from 'react';
import Steps from './Steps.jsx';
import Block from './Block.jsx';
import '../css/first.css';

export default class ContentS1 extends Component{
    render(){
        return(
            <div>
                {this.props.side == "left" ? 
                    <div className = "container flex-cont">
                        <div className={this.props.flex}>
                            <img src={this.props.img} alt="First Step" />
                        </div>
                        <div className="ff">
                            <Steps step={this.props.step} description={this.props.description} footer={this.props.footer}/>
                            <Block num={this.props.num} name={this.props.name}/>
                        </div>
                    </div>
                    :
                    <div className = "container flex-cont">
                        <div className={this.props.flex}>
                            <Steps step={this.props.step} description={this.props.description} footer={this.props.footer}/>
                            <Block num={this.props.num} name={this.props.name}/>
                            
                        </div>
                        <div className="ff">
                            <img src={this.props.img} alt="First Step" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}