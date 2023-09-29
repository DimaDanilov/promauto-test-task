import React from "react";
import { makeAutoObservable } from "mobx";
import { UserModel } from "../models/UserModel";
import { getUsers } from "../api/UserApi";

class UsersStore {
  users: UserModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUsers = async () => {
    this.users = await getUsers();
  };
}

export const UsersInstance = new UsersStore();
export const UsersContext = React.createContext(UsersInstance);

export const useUsersStore = () => {
  return React.useContext(UsersContext);
};

export default UsersInstance;
