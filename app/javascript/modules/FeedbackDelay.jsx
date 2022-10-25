import React, { Component } from 'react'
import SC_Slider from '../components/SC_Slider.jsx'

export default class Vibrato extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="sliderwrapper">
        <SC_Slider
          name="FeedbackDelay Time"
          min={0}
          max={1}
          step={0.01}
          value={settings.feedbackDelay.wet}
          property="feedback"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
