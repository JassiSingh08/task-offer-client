import React from "react";
import { CommonBtn, ToggleBtn } from "./MyButton";
import { useDispatch, useSelector } from "react-redux";
import {
  KitAllOff,
  KitAllOn,
  toggleKitLight1,
  toggleKitLight2,
} from "../redux/actions";

const Kitchen = () => {
  const { isKitChecked1, isKitChecked2 } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  // console.log(isKitChecked1, isKitChecked2)

  return (
    <div className="Kitchen-container">
      <h1>Kitchen</h1>
      <div className="K1">
        <span>Light 1</span>
        <ToggleBtn
          checked={isKitChecked1}
          onChange={(e) => dispatch(toggleKitLight1(e.target.checked))}
        />
      </div>
      <div className="K2">
        <span>Light 2</span>
        <ToggleBtn
          checked={isKitChecked2}
          onChange={(e) => dispatch(toggleKitLight2(e.target.checked))}
        />
      </div>
      <div className="Both-btns">
        <CommonBtn text={"Both ON"} clickFuntion={() => dispatch(KitAllOn())} />
        <CommonBtn
          text={"Both OFF"}
          clickFuntion={() => dispatch(KitAllOff())}
        />
      </div>
    </div>
  );
};

export default Kitchen;
