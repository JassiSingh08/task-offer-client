import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleBedLight1,
  toggleBedLight2,
  BedAllOff,
  BedAllOn,
} from "../redux/actions";
import { CommonBtn, ToggleBtn } from "./MyButton";

const Bedroom = () => {
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
          onChange={(e) => dispatch(toggleBedLight1(e.target.checked))}
        />
      </div>
      <div className="L2">
        <span>Light 2</span>
        <ToggleBtn
          checked={isBedChecked2}
          onChange={(e) => dispatch(toggleBedLight2(e.target.checked))}
        />
      </div>
      <div className="Both-btns">
        <CommonBtn text={"Both ON"} clickFuntion={() => dispatch(BedAllOn())} />
        <CommonBtn
          text={"Both OFF"}
          clickFuntion={() => dispatch(BedAllOff())}
        />
      </div>
    </div>
  );
};

export default Bedroom;
