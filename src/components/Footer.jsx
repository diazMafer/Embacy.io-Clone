import React, { Component } from 'react'
import Icon from './Icon.jsx'
import '../css/landing.css';

export default class Footer extends Component{
    render(){
        return(
            <footer>
                <Icon />
                <div className="foot">If you have an ad blocker enabled and no buttons are displayed - send us an email: hello@embacy.io</div>
                <img src="./src/assets/09-il.svg" />
            </ footer>
        )
    }
}