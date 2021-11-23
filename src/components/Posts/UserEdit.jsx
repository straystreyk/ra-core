import React from "react";
import { SimpleForm, Edit, TextInput, DateInput, required } from "react-admin";

export const UserEdit = (props) => {
  return (
    <Edit {...props} title={props.options.label}>
      <SimpleForm>
        <TextInput source="username" validate={required()} />
        <TextInput multiline source="phone" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};
