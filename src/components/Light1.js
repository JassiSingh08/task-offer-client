import React from "react";
import { ToggleBtn } from "./MyButton";
import { useDispatch } from "react-redux";

const Light1 = ({ room, checked, toggleSwitch, toggleLight }) => {
  const dispatch = useDispatch();

  return (
    <div className={room}>
      <span>Light 1</span>
      <ToggleBtn
        checked={checked}
        onChange={(e) => {
          dispatch(toggleLight(e.target.checked));
          toggleSwitch({
            room: room,
            value: e.target.checked,
            light: "one",
          });
        }}
      />
    </div>
  );
};

export default Light1;
