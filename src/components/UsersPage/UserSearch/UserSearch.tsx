import React, { useState } from "react";
import "./UserSearch.less";
import { ModalWindow } from "./ModalWindow/ModalWindow";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

export const UserSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [isModalActive, setModalActive] = useState(false);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="user-search-container">
      <div className="user-search-window-container">
        <input
          className="user-search"
          type="text"
          name="user-search"
          id="user-search"
          value={search}
          placeholder="Select name"
          onChange={handleSearchChange}
          onFocus={() => setModalActive(true)}
        />
        {isModalActive ? (
          <KeyboardArrowUp className="search-arrow" />
        ) : (
          <KeyboardArrowDown className="search-arrow" />
        )}
      </div>
      <ModalWindow
        search={search}
        isModalActive={isModalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
};
