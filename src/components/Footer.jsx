import React, { PureComponent } from 'react'
import Icon from './Icon.jsx'
import '../css/landing.css'


class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <Icon />
        <div className="foot">If you have an ad blocker enabled and no buttons are displayed - send us an email: hello@embacy.io</div>
        <img src="./src/assets/09-il.svg" alt="final" />
      </footer>
    )
  }
}

export default Footer
