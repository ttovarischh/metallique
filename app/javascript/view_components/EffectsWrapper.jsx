import React, { PureComponent } from "react";

export default function EffectsWrapper(props) {
  const { synthname } = props;
  return (
    <div className="effectswrapper">
        <div className="synthname">
          <h3>{synthname}</h3>
          <div className="arrow"></div>
        </div>
        <dir className="divider"></dir>
        {props.children}
    </div>
  );
}
