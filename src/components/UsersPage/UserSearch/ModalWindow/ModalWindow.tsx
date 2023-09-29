import React from "react";
import "./ModalWindow.less";
import { ModalWindowElement } from "./ModalWindowElement/ModalWindowElement";

type ModalWindowProps = {
  isModalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalWindow = ({
  isModalActive,
  setModalActive,
}: ModalWindowProps) => {
  return (
    <div
      className="modal-relative"
      hidden={!isModalActive}
      onClick={() => setModalActive(false)}
    >
      {/* Modal Borders to FullScreen */}
      <div
        className="modal-disappear-bg"
        hidden={!isModalActive}
        onClick={() => setModalActive(false)}
      />
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <ModalWindowElement element="Scales" />
        <ModalWindowElement element="Horns" />
      </div>
    </div>
  );
};
