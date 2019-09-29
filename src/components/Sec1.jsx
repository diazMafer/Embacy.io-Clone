import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Content from './ContentS1.jsx'
import '../css/first.css'

class firstSec extends PureComponent {
  render() {
    const {
      padding, style, side, num, name, flex, img, step, description, footer,
    } = this.props

    const style1 = {
      paddingTop: padding,
    }

    return (
      <div className="sect" style={style1}>
        {num === '01' ? <h2 className="box">Here&apos;s how:</h2> : <div />}
        <Content
          style={style}
          side={side}
          num={num}
          name={name}
          flex={flex}
          img={img}
          step={step}
          description={description}
          footer={footer}
        />

      </div>

    )
  }
}

firstSec.propTypes = {
  padding: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,

}

export default firstSec
