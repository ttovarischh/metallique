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
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
