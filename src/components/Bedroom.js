import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBedLight1,
  toggleBedLight2,
  BedAllOff,
  BedAllOn,
} from "../redux/actions";
import { CommonBtn } from "./MyButton";
import Light1 from "./Light1";
import Light2 from "./Light2";

const Bedroom = ({ toggleSwitch }) => {
  const { isBedChecked1, isBedChecked2 } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();

    // isBedChecked1 : Bedroom Light 1
    // isBedChecked2 : Bedroom Light 2
    // BedAllOn      : Bedroom Both ON
    // BedAllOff     : Bedroom Both OFF

  return (
    <div className="bedroom-container">
      <h1>Bedroom</h1>
      <Light1
        room="bedroom"
        checked={isBedChecked1}
        toggleLight={toggleBedLight1}
        toggleSwitch={toggleSwitch}
      />
      <Light2
        room="bedroom"
        checked={isBedChecked2}
        toggleLight={toggleBedLight2}
        toggleSwitch={toggleSwitch}
      />
      <div className="Both-btns">
        <CommonBtn
          text={"Both ON"}
          clickFuntion={() => {
            dispatch(BedAllOn());
            toggleSwitch({
              room: "bedroom",
              value: true,
              light: "all",
            });
          }}
        />
        <CommonBtn
          text={"Both OFF"}
          clickFuntion={() => {
            dispatch(BedAllOff());
            toggleSwitch({
              room: "bedroom",
              value: false,
              light: "all",
            });
          }}
        />
      </div>
    </div>
  );
};

export default Bedroom;
