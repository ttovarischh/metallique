import React, { Component } from 'react'
import SC_Slider from '../components/SC_Slider.jsx'

export default class Delay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="sliderwrapper">
        <SC_Slider
          name="Distortion Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.distortion.wet}
          property="distortionWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
