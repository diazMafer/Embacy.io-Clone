import React, { Component } from 'react'
import '../css/header.css'

export default class Collage extends Component{
    constructor(props){
        super(props)
        this.imgList = [{src: "./src/assets/E.svg", className: "abs f1"},
                        {src:"./src/assets/C.svg" , className:"abs f2"},
                        {src:"./src/assets/M.svg",  className:"abs f3"},
                        {src:"./src/assets/B.svg",  className:"abs f4"},
                        {src:"./src/assets/A.svg",  className:"abs f5"},
                        {src:"./src/assets/Y.svg",  className:"abs f6"}
        ]
    }
    render(){
        return(
            <div className="right-first" >
                {
                    this.imgList.map(({src, className}) => {
                    return <img src={src} className={className}/>      
                    }
                    )
                }
            </div>   
        )
    }
}