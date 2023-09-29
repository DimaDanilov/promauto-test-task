import React from "react";
import { Container } from "../../ui/Container/Container";
import { UserSearch } from "../../components/UsersPage/UserSearch/UserSearch";
import { UserFilterInfo } from "../../components/UsersPage/UserFilterInfo/UserFilterInfo";
import { UserList } from "../../components/UsersPage/UserList/UserList";

export const UsersPage = () => {
  return (
    <Container>
      <UserSearch />
      <UserFilterInfo />
      <UserList />
    </Container>
  );
};
