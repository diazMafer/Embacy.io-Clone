import React, { PureComponent } from 'react'

class Icon extends PureComponent {
  render() {
    return (
      <div className="social">
        <a href="https://mail.google.com" className="fa fa-envelope-o icon" />
        <a href="https://telegram.org/" className="fa fa-telegram icon" />
        <a href="https://www.whatsapp.com/?l=es" className="fa fa-facebook-f icon" />
        <a href="https://www.facebook.com/" className="fa fa-whatsapp icon" />
      </div>
    )
  }
}

export default Icon
