import React from "react";

import style from "./BuildControl.module.css";

const BuildControl = (props) => (
  <div className={style.BuildControl}>
    <div className={style.Label}>
      <strong>{props.label}</strong>
    </div>
    <button
      className={style.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={style.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
