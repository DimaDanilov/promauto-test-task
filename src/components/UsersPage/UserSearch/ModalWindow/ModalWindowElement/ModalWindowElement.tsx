import React from "react";

export const ModalWindowElement = ({ element }: { element: string }) => {
  return (
    <div>
      <input type="checkbox" id={element} name={element} />
      <label htmlFor={element}>{element}</label>
    </div>
  );
};
