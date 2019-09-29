import React, { Component } from 'react'

export default class Icon extends Component{
    render(){
        return(
            <div className="social">
                <a class="fa fa-envelope-o icon" />
                <a class="fa fa-telegram icon" />
                <a class="fa fa-facebook-f icon" /> 
                <a class="fa fa-whatsapp icon" />
            </div>
        )
    }
}