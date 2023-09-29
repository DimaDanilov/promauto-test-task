import React from "react";
import { makeAutoObservable, computed } from "mobx";
import { UserModel } from "../models/UserModel";
import { getUsers } from "../api/UserApi";

class UsersStore {
  users: UserModel[] = [];
  filters: number[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setUsers = async () => {
    this.users = await getUsers();
  };

  addFilter = (filterId: number) => {
    this.filters.push(filterId);
  };
  removeFilter = (filterId: number) => {
    this.filters = this.filters.filter((f) => {
      return f !== filterId;
    });
  };
  get filteredUsers() {
    if (this.filters.length) {
      return this.users.filter((u) => this.filters.includes(u.id));
    } else return this.users;
  }
}

export const UsersInstance = new UsersStore();
export const UsersContext = React.createContext(UsersInstance);

export const useUsersStore = () => {
  return React.useContext(UsersContext);
};

export default UsersInstance;
