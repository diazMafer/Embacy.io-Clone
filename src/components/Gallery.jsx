import React, { PureComponent } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import Slide from './Slide.jsx'
import '../css/gallery.css'


class Gallery extends PureComponent {
  render() {
    return (

      <div className="gallery">
        <HorizontalScroll reverseScroll animValues={20} config={{ stiffness: 5, damping: 2 }}>
          <div className="gallery-track">
            <Slide />
          </div>
        </HorizontalScroll>
      </div>
    )
  }
}

export default Gallery
