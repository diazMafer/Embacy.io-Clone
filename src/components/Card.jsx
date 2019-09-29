import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/landing.css'

class Card extends PureComponent {
  render() {
    const { src } = this.props
    return (
      <a href="https://www.behance.net/gallery/78225125/Atelier-Portofino-Landing-Page" className="case">
        <img src={src} alt="landing page" />
      </a>
    )
  }
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Card
