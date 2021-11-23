import React from "react";
import { List, Datagrid, TextField, SearchInput, EditButton } from "react-admin";
import Empty from "../Empty/Empty";

function UserList(props) {
    return (
    <List {...props} empty={<Empty />}>
      <Datagrid rowClick="edit">
        <TextField source="username" />
        <TextField source="phone"/>
        <EditButton/>
      </Datagrid>
    </List>
  );
}

export default UserList;
