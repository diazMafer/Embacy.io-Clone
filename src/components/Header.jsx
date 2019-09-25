import React, { Component } from 'react';
import '../css/header.css';

export default class Header extends Component {
  
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
                        <div className="right-first" >
                            <img src="./src/assets/E.svg"  className="abs f1" />
                            <img src="./src/assets/C.svg"  className="abs f2" />
                            <img src="./src/assets/M.svg"  className="abs f3" />
                            <img src="./src/assets/B.svg"  className="abs f4" />
                            <img src="./src/assets/A.svg"  className="abs f5" />
                            <img src="./src/assets/Y.svg"  className="abs f6" />
                        </div>   
                    </div>                   
                </div>
            </div>
        </header>
      )
    }
  }