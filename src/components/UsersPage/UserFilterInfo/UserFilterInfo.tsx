import React from "react";
import "./UserFilterInfo.less";
import { useUsersStore } from "../../../store/UsersStore";
import { observer } from "mobx-react-lite";

export const UserFilterInfo = observer(() => {
  const usersStore = useUsersStore();

  const onHandleClick = () => {
    usersStore.clearFilters();
  };

  return (
    <div>
      <p>
        <span className="filters-gray">Filter:{usersStore.filters.length}</span>
        <span className="clear-all-btn" onClick={onHandleClick}>
          Clear all
        </span>
      </p>
      <p>
        <span>Name: </span>
        <span className="filters-gray">
          {usersStore.filteredUsersNames.join(", ")}
        </span>
      </p>
    </div>
  );
});
