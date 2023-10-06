import React from "react";
import { ToggleBtn } from "./MyButton";
import { useDispatch } from "react-redux";

const Light2 = ({ room, checked, toggleSwitch, toggleLight }) => {
  const dispatch = useDispatch();

  return (
    <div className={room}>
      <span>Light 2</span>
      <ToggleBtn
        checked={checked}
        onChange={(e) => {
          dispatch(toggleLight(e.target.checked));
          toggleSwitch({
            room: room,
            value: e.target.checked,
            light: "two",
          });
        }}
      />
    </div>
  );
};

export default Light2;
