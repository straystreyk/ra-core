import React from "react";
import { TextInput, required } from "react-admin";
import GetCreate from "./check";

const UserCreate = (props) => {
  return (
        <GetCreate {...props}>
            <TextInput source="phone" />
            <TextInput
                source="createdAt"
                validate={required()}
                options={{ multiline: true }}
            />
            <TextInput
                source="firstName"
                validate={required()}
                options={{ multiline: true }}
            />
            <TextInput
                source="lastName"
                validate={required()}
                options={{ multiline: true }}
            />
            <TextInput
                source="username"
                validate={required()}
            />
        </GetCreate>
  )
}

export default UserCreate;
