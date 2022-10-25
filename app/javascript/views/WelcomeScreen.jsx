import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Modal from "../view_components/Modal.jsx";

import SC_Button from '../components/SC_Button'

export default class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { handleStartWebAudio } = this.props

    return (
      <div className="WelcomeScreen">
        <Modal modalid="start" appname="ARE YOU READY TO FLEX?" >
          <div className='alarm'></div>
          <h4>U are gonna procceed to a digital sound trip through 3 countries.
            <br></br>
            Click <strong>«OK»</strong> to continue.</h4>
          <SC_Button text="OK" handleClick={handleStartWebAudio} />
        </Modal>
      </div>
    )
  }
}

WelcomeScreen.propTypes = {
  handleStartWebAudio: PropTypes.func.isRequired
}