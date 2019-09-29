import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import Slide from './Slide.jsx'
import '../css/gallery.css';


export default class Gallery extends Component{
    
    render(){
               
        return(
            
            <div className="gallery" >
                <HorizontalScroll  reverseScroll={true} animValues={20} config = {{ stiffness: 5, damping:  2}}>
                    <div className="gallery-track" >
                        <Slide />
                    </div>
                </HorizontalScroll>
            </div>
        )
    }

}