import React, { useState } from "react";
import "./UserSearch.less";
import { ModalWindow } from "./ModalWindow/ModalWindow";

export const UserSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [isModalActive, setModalActive] = useState(false);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="user-search-container">
      <input
        className="user-search"
        type="text"
        name="user-search"
        id="user-search"
        value={search}
        onChange={handleSearchChange}
        onFocus={() => setModalActive(true)}
      />
      <ModalWindow
        isModalActive={isModalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
};
