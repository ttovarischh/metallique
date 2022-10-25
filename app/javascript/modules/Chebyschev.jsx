import React, { Component } from 'react'
import SC_Slider from '../components/SC_Slider.jsx'

export default class Chebyschev extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="sliderwrapper">
        <SC_Slider
          name="Chebyschev Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.chebyshev.wet}
          property="chebyshevWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
