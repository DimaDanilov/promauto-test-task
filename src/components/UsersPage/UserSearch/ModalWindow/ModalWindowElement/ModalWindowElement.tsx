import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import "./ModalWindowElement.less";
import { UserModel } from "../../../../../models/UserModel";
import { useUsersStore } from "../../../../../store/UsersStore";

export const ModalWindowElement = observer(({ user }: { user: UserModel }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const usersStore = useUsersStore();

  const onHandleClick = () => {
    if (checked) {
      usersStore.removeFilter(user.id);
    } else if (!checked) {
      usersStore.addFilter(user.id);
    }
  };

  useEffect(() => {
    if (usersStore.filters.includes(user.id) && !checked) {
      setChecked(true);
    } else if (!usersStore.filters.includes(user.id) && checked) {
      setChecked(false);
    }
  }, [usersStore.filters.length]);

  return (
    <div className="modal-window-element">
      <input
        className="modal-window-element__checkbox"
        type="checkbox"
        id={user.id.toString()}
        name={user.id.toString()}
        onChange={onHandleClick}
        checked={checked}
      />
      <label
        className="modal-window-element__label"
        htmlFor={user.id.toString()}
      >
        {user.name}
      </label>
    </div>
  );
});
