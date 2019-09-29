import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Steps from './Steps.jsx'
import Block from './Block.jsx'
import '../css/first.css'

class ContentS1 extends PureComponent {
  render() {
    const {
      side, flex, img, style, step, description, footer, num, name,
    } = this.props
    return (
      <div>
        {side === 'left' ? (
          <div className="container flex-cont">
            <div className={flex}>
              <img src={img} alt="First Step" />
            </div>
            <div className="ff">
              <Steps style={style} step={step} description={description} footer={footer} />
              <Block num={num} name={name} />
            </div>
          </div>
        )
          : (
            <div className="container flex-cont">
              <div className={flex}>
                <Steps style={style} step={step} description={description} footer={footer} />
                <Block num={num} name={name} />

              </div>
              <div className="ff">
                <img src={img} alt="First Step" />
              </div>
            </div>
          )}
      </div>
    )
  }
}

ContentS1.propTypes = {
  side: PropTypes.string.isRequired,
  flex: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  step: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}


export default ContentS1
