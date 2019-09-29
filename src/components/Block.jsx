import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../css/first.css'


class Block extends PureComponent {
  render() {
    const { name, num } = this.props
    return (
      <div className={name}>
        <div className="num">{num}</div>
      </div>
    )
  }
}

Block.propTypes = {
  name: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
}
export default Block
