import React from "react";

export const ToggleBtn = ({ checked, onChange }) => {
  return (
    <div>
      <label class="toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div class="toggle-switch-background">
          <div class="toggle-switch-handle"></div>
        </div>
      </label>
    </div>
  );
};

export const CommonBtn = ({ text, clickFuntion }) => {
  return <button onClick={clickFuntion}>{text}</button>;
};
