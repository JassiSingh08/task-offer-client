//BEDROOM MANAGEMENT
export const toggleBedLight1 = (data) => ({
  type: "TOGGLE_BEDLIGHT_1",
  payload: data
});

export const toggleBedLight2 = (data) => ({
  type: "TOGGLE_BEDLIGHT_2",
  payload: data
});

export const BedAllOn = () => ({
  type: "BED_ALL_ON",
});

export const BedAllOff = () => ({
  type: "BED_ALL_OFF",
});

// KITCHEN MANAGEMENT 
export const toggleKitLight1 = (data) => ({
  type: "TOGGLE_KITLIGHT_1",
  payload: data
});

export const toggleKitLight2 = (data) => ({
  type: "TOGGLE_KITLIGHT_2",
  payload: data
});

export const KitAllOn = () => ({
  type: "KIT_ALL_ON",
});

export const KitAllOff = () => ({
  type: "KIT_ALL_OFF",
});

//GLOBAL BUTTONS

export const GlobalAllOn = () => ({
  type: "GLOBAL_ALL_ON",
});

export const GlobalAllOff = () => ({
  type: "GLOBAL_ALL_OFF",
});

