import React, { Component } from 'react'
import '../css/gallery.css' 
import Steps from './Steps.jsx'

export default class Slide extends Component {
    constructor(props){
        super(props)
        this.stepsList = [{style: {marginLeft: '250px'}, step: "Step five", description: "Drew custom illustrations, and designed the whole thing", footer: "Big thanks to Adobe Illustrator, which allowed us to draw and perfect these beauties. These guys are real members of our team, by the way."},
        {style: {marginLeft: '250px'}, step: "Step six", description: "We put together desktop, tablet and mobile versions", footer: "Instead of programmers we work with Webflow. Its capabilities were more than enough to achieve 94/100 in Google Page Speed.+\n+ This means that the site loads in less than a second and everything is displayed correctly."},
        {style: {marginLeft: '250px'}, step: "Step seven", description: "Set up analytics", footer: "If you read this far, wave the cursor, we are watching you through Fullstory"},
        {style: {marginLeft: '250px'}, step: "Step eigth", description: "Plugged in pixels and started running ads", footer: "Over 10 000 people visited this page, only 15% of whom came from paid advertisements.Don’t believe us? Here is full acess to our Yandex.Metrica"}
        
                      ]       
        
    }

    render(){
        const colorH = {
            color: '#fff',
            width: '530px'
        }

        const colorP = {
            color: '#bdbdbd'
        }

        const colorB = {
            color: '#49a6ff'
        }
        return(
            <div className="slide ">
                {

                    this.stepsList.map(({style, step, description, footer}) => {
                    return <Steps  style={style} step={step}  description={description} footer={footer} colorH={colorH} colorP={colorP} colorB={colorB}/>      
                    }
                    )
                }
                
            </div>
        )
    }
}