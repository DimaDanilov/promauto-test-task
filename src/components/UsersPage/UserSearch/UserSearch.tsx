import React, { useState } from "react";
import "./UserSearch.less";
import { ModalWindow } from "./ModalWindow/ModalWindow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowUp } from "@mui/icons-material";

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
          <KeyboardArrowDownIcon className="search-arrow" />
        )}
      </div>
      <ModalWindow
        isModalActive={isModalActive}
        setModalActive={setModalActive}
      />
    </div>
  );
};
