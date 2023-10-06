import React from "react";

export const ToggleBtn = ({ checked, onChange }) => {
  return (
    <div>
      <label className="toggle-switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle"></div>
        </div>
      </label>
    </div>
  );
};

export const CommonBtn = ({ text, clickFuntion }) => {
  return <button onClick={clickFuntion} className="Common-button">{text}</button>;
};

