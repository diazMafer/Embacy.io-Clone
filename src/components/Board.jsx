import React, { Component } from 'react'
import Card from './Card.jsx'
import '../css/landing.css'

class Board extends Component {
  constructor(props) {
    super(props)
    this.imageList = [{ src: './src/assets/exp.jpg' }, { src: './src/assets/desk.jpg' }, { src: './src/assets/antimarket.jpg' },
      { src: './src/assets/port.jpg' }, { src: './src/assets/hit.jpg' }, { src: './src/assets/mlg.jpg' },
    ]
  }

  render() {
    return (
      <div className="board">
        {
                    this.imageList.map(({ src }) => <Card src={src} key={src} />)
                }

      </div>
    )
  }
}

export default Board
