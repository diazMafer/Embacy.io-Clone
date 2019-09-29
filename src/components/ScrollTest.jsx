import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

export default class ScrollingHorizontally extends Component {
  render() {
    const child   = { width: `30em`, height: `50px`, backgroundColor: "blue", border: '1px solid white'}
    const parent  = { width: `60em`, height: `50px`, backgroundColor: "red", border: '1px solid white', touchAction: 'none'}
    return (
      <div style={parent}>
        <HorizontalScroll >
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
            <div style={child} />
        </HorizontalScroll>
      </div>
    )
  }
}