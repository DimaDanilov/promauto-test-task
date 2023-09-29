import React from "react";
import { Header } from "../components/common/Header/Header";
import { UsersPage } from "./UsersPage/UsersPage";

export const App = () => {
  return (
    <div className="app">
      <Header title="User List" />
      <UsersPage />
    </div>
  );
};
