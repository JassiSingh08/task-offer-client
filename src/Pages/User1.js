import React from "react";
import Bedroom from "../components/Bedroom";
import Kitchen from "../components/Kitchen";
import { CommonBtn } from "../components/MyButton";
import { useDispatch } from "react-redux";
import { GlobalAllOn, GlobalAllOff } from "../redux/actions";

const User1 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center">User 1</h1>
      <div className="users">
        <Bedroom />
        <Kitchen />
      </div>
      <div className="global-btns">
        <CommonBtn
          text={"All ON"}
          clickFuntion={() => dispatch(GlobalAllOn())}
        />
        <CommonBtn
          text={"All OFF"}
          clickFuntion={() => dispatch(GlobalAllOff())}
        />
      </div>
    </div>
  );
};

export default User1;
