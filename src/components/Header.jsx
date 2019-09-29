import React, { Component } from 'react'
import Collage from './Collage.jsx'
import '../css/header.css'

class Header extends Component {
  
    render() {
    
      return (
        <header >
            <div className="wrapfull" >
                <div className="container">
                    <div className="flex-first" >
                        <div className="left">
                            <a href="#" className="logo">
                                <img src="./src/assets/Logo.svg" alt="embacy logo"/>
                            </a>
                            <h1 >We Made This Landing Page</h1>
                            <div>to show you how we make landing pages, so that you decide to make yours with us</div>
                            <div className="btn-wrapper" >
                            <a href="#" className="btn">
                                scroll down
                                <span className="arrow" >↓</span>
                            </a>
                        </div>
                        </div>
                        <Collage />
                    </div>                   
                </div>
            </div>
        </header>
      )
    }
  }

  export default Header