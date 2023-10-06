import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBedLight1,
  toggleBedLight2,
  BedAllOff,
  BedAllOn,
} from "../redux/actions";
import { CommonBtn, ToggleBtn } from "./MyButton";

const Bedroom = ({ toggleSwitch }) => {
  const { isBedChecked1, isBedChecked2 } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  // console.log(isBedChecked1, isBedChecked2)

  return (
    <div className="bedroom-container">
      <h1>Bedroom</h1>
      <div className="L1">
        <span>Light 1</span>
        <ToggleBtn
          checked={isBedChecked1}
          onChange={(e) => {
            dispatch(toggleBedLight1(e.target.checked));
            toggleSwitch({
              room: "bedroom",
              value: e.target.checked,
              light: "one",
            });
          }}
        />
      </div>
      <div className="L2">
        <span>Light 2</span>
        <ToggleBtn
          checked={isBedChecked2}
          onChange={(e) => {
            dispatch(toggleBedLight2(e.target.checked));
            toggleSwitch({
              room: "bedroom",
              value: e.target.checked,
              light: "two",
            });
          }}
        />
      </div>
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
