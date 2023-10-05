import { configureStore } from "@reduxjs/toolkit";
import checkboxReducer from "./reducers";

export default configureStore({
  reducer: {
    counter: checkboxReducer,
  },
});
