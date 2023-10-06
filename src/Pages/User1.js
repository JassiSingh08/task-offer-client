import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  GlobalAllOn,
  GlobalAllOff,
  toggleBedLight1,
  toggleBedLight2,
  BedAllOn,
  BedAllOff,
  KitAllOff,
  KitAllOn,
  toggleKitLight2,
  toggleKitLight1,
} from "../redux/actions";

import socket from "../websocket";
import Users from "../components/Users";

const User1 = () => {
  const dispatch = useDispatch();
  //   {room: 'bedroom', value: true, light: 'one'}

  const SocketConnection = () => {
    socket.on("force_toggle_switch", (data) => {
      console.log("Received message:", data);
      if (data.room === "bedroom") {
        if (data.light === "one") {
          dispatch(toggleBedLight1(data.value));
        } else if (data.light === "two") {
          dispatch(toggleBedLight2(data.value));
        } else if (data.light === "all") {
          dispatch(data.value ? BedAllOn() : BedAllOff());
        }
      } else if (data.room === "kitchen") {
        if (data.light === "one") {
          dispatch(toggleKitLight1(data.value));
        } else if (data.light === "two") {
          dispatch(toggleKitLight2(data.value));
        } else if (data.light === "all") {
          dispatch(data.value ? KitAllOn() : KitAllOff());
        }
      } else if (data.room === "all") {
        dispatch(data.value ? GlobalAllOn() : GlobalAllOff());
      }
    });

    return () => {
      socket.off("message");
    };
  };

  useEffect(() => {
    SocketConnection();
  }, []);

  const toggleSwitch = (data) => {
    socket.emit("toggle_switch", data);
  };

  return (
    <div>
      <h1 className="text-center">User 1</h1>
      <Users toggleSwitch={toggleSwitch} />

    </div>
  );
};

export default User1;
