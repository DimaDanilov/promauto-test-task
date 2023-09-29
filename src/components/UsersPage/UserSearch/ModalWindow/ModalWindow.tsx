import React from "react";
import "./ModalWindow.less";
import { ModalWindowElement } from "./ModalWindowElement/ModalWindowElement";
import { useUsersStore } from "../../../../store/UsersStore";

type ModalWindowProps = {
  isModalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalWindow = ({
  isModalActive,
  setModalActive,
}: ModalWindowProps) => {
  const usersStore = useUsersStore();

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
        {usersStore.users.map((u) => (
          <ModalWindowElement user={u} />
        ))}
      </div>
    </div>
  );
};
