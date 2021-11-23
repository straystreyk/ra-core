import React from "react";
import {Datagrid, EditButton, List, TextField} from "react-admin";

const MovisCreate = (props) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">

            </Datagrid>
        </List>
    )
}

export default MovisCreate
