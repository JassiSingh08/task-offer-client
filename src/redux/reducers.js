

const initialState = {
  isBedChecked1: false,
  isBedChecked2: false,
  isKitChecked1: false,
  isKitChecked2: false,
};

const checkboxReducer = (state = initialState, action) => {
    // console.log("ACTION", action)
  switch (action.type) {
    case "TOGGLE_BEDLIGHT_1":
      return { ...state, isBedChecked1: action.payload };
    case "TOGGLE_BEDLIGHT_2":
      return { ...state, isBedChecked2: action.payload };
    case "BED_ALL_ON":
      return { ...state, isBedChecked1: true, isBedChecked2: true };
    case "BED_ALL_OFF":
      return { ...state, isBedChecked1: false, isBedChecked2: false };

    case "TOGGLE_KITLIGHT_1":
      return { ...state, isKitChecked1: action.payload };
    case "TOGGLE_KITLIGHT_2":
      return { ...state, isKitChecked2: action.payload };
    case "KIT_ALL_ON":
      return { ...state, isKitChecked1: true, isKitChecked2: true };
    case "KIT_ALL_OFF":
      return { ...state, isKitChecked1: false, isKitChecked2: false };

    case "GLOBAL_ALL_ON":
      return { ...state, isBedChecked1: true, isBedChecked2: true, isKitChecked1: true, isKitChecked2: true };
    case "GLOBAL_ALL_OFF":
      return { ...state, isBedChecked1: false, isBedChecked2: false, isKitChecked1: false, isKitChecked2: false };

    default:
      return state;
  }
};

export default checkboxReducer;
