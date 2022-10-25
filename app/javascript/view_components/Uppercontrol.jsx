import React, { PureComponent } from "react";

export default class Uppercontrol extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { appname } = this.props

    return (
      <div className="uppercontrol">
        <div className="circles">
          <div className="circle" id="dark"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <h2>{appname}</h2>
        <div className="arrow"></div>
      </div>
    );
  }
}
