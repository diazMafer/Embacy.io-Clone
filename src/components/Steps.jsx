import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/first.css'

class Steps extends PureComponent {
  render() {
    const {
      style, colorB, step, colorH, description, colorP, footer,
    } = this.props

    return (
      <div className="step-container" style={style}>
        <div className="number-text" style={colorB}>{step}</div>
        <h2 style={colorH}>{description}</h2>
        <p className="par" style={colorP}>{footer}</p>
      </div>

    )
  }
}

Steps.propTypes = {
  style: PropTypes.object || PropTypes.undefined.isRequired,
  colorB: PropTypes.object || PropTypes.undefined.isRequired,
  step: PropTypes.string.isRequired,
  colorH: PropTypes.object || PropTypes.undefined.isRequired,
  description: PropTypes.string.isRequired,
  colorP: PropTypes.object || PropTypes.undefined.isRequired,
  footer: PropTypes.string.isRequired,

}

export default Steps
