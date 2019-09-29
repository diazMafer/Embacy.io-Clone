import React, { Component } from 'react'
import Step from './Steps.jsx'
import Board from './Board.jsx'

class Landing extends Component {
  constructor(props) {
    super(props)
    this.step = [{ step: 'Instead of call to action', description: 'This landing page help us find our clients', footer: 'For example:' }]
  }

  render() {
    return (
      <div className="landing">
        {
                    this.step.map(({
                      step, description, footer, style,
                    }) => (
                      <Step
                        key={step}
                        step={step}
                        description={description}
                        footer={footer}
                        style={style}
                      />
                    ))
                }
        <Board />
        <p className="final">We are in charge of analytics, prototyping, illustrations, layout and final assembly. Send us a message if we are fit for your task.</p>
      </div>
    )
  }
}

export default Landing
