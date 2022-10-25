import React, { Component } from "react";
import SC_Button from "../components/SC_Button.jsx";


export default class Play extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  toggleIsActive = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const { handleValueChange, type } = this.props;
    return (
      <div
        className="Play"
        id={`${this.state.isActive ? "playing" : ""}`}
        onClick={this.toggleIsActive}
      >
        <SC_Button text="" handleClick={handleValueChange} />
        {!this.state.isActive
            ? <div className="playicon"></div>
            : <div className={`${type}`}></div>
        }
        {this.state.isActive && <div className="loadwrapper"><div className="load"></div></div>}
      </div>
    );
  }
}
