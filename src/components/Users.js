import React from "react";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import { CommonBtn } from "./MyButton";
import { useDispatch } from "react-redux";
import { GlobalAllOff, GlobalAllOn } from "../redux/actions";
import { Link, useLocation } from "react-router-dom";

const Users = ({ toggleSwitch }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <div className="users">
        <Bedroom toggleSwitch={toggleSwitch} />
        <Kitchen toggleSwitch={toggleSwitch} />
      </div>
      <div className="global-btns">
        <CommonBtn
          text={"All ON"}
          clickFuntion={() => {
            dispatch(GlobalAllOn());
            toggleSwitch({
              room: "all",
              value: true,
            });
          }}
        />
        <CommonBtn
          text={"All OFF"}
          clickFuntion={() => {
            dispatch(GlobalAllOff());
            toggleSwitch({
              room: "all",
              value: false,
            });
          }}
        />
      </div>
      <div className="centered">
        {location.pathname === "/user-1" ? (
          <Link to="/user-2">
            <CommonBtn text={"Go to User-2"} />
          </Link>
        ) : (
          <Link to="/user-1">
            <CommonBtn text={"Go to User-1"} />
          </Link>
        )}
      </div>
    </>
  );
};

export default Users;
