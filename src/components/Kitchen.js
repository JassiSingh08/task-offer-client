import React from "react";
import { CommonBtn } from "./MyButton";
import { useDispatch, useSelector } from "react-redux";
import {
  KitAllOff,
  KitAllOn,
  toggleKitLight1,
  toggleKitLight2,
} from "../redux/actions";
import Light1 from "./Light1";
import Light2 from "./Light2";

const Kitchen = ({ toggleSwitch }) => {
  const { isKitChecked1, isKitChecked2 } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

    // isKitChecked1 : Kitchen Light 1
    // isKitChecked2 : Kitchen Light 2
    // KitAllOn      : Kitchen Both ON
    // KitAllOff     : Kitchen Both OFF

  return (
    <div className="Kitchen-container">
      <h1>Kitchen</h1>
      <Light1
        room="kitchen"
        checked={isKitChecked1}
        toggleLight={toggleKitLight1}
        toggleSwitch={toggleSwitch}
      />
      <Light2
        room="kitchen"
        checked={isKitChecked2}
        toggleLight={toggleKitLight2}
        toggleSwitch={toggleSwitch}
      />
      <div className="Both-btns">
        <CommonBtn
          text={"Both ON"}
          clickFuntion={() => {
            dispatch(KitAllOn());
            toggleSwitch({
              room: "kitchen",
              value: true,
              light: "all",
            });
          }}
        />
        <CommonBtn
          text={"Both OFF"}
          clickFuntion={() => {
            dispatch(KitAllOff());
            toggleSwitch({
              room: "kitchen",
              value: false,
              light: "all",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Kitchen;
