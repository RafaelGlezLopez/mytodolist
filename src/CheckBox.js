import React from "react";
import { Fragment } from "react";
const CheckBox = props => {
    // (A)
    const {
      onChange,
      data: { id,description, done }
    } = props;
    return (
      <Fragment>
        <label className="todo new-item">
          {/*(B) (C)*/}
          <input
            className="todo__state"
            name={id}
            type="checkbox"
            defaultChecked={done}
            onChange={onChange}
          />
          <div className="todo__text">{description}</div>
        </label>
      </Fragment>
    );
  };
  
  export default CheckBox;