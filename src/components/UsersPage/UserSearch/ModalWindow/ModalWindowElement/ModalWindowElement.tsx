import React from "react";
import "./ModalWindowElement.less";

export const ModalWindowElement = ({ element }: { element: string }) => {
  return (
    <div className="modal-window-element">
      <input
        className="modal-window-element__checkbox"
        type="checkbox"
        id={element}
        name={element}
      />
      <label className="modal-window-element__label" htmlFor={element}>
        {element}
      </label>
    </div>
  );
};
