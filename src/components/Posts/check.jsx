import React, { useState } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
    CreateButton,
} from "react-admin";

const GetCreate = (props) => {
  const [value, setValue] = useState();
  const validateUserCreation = (values) => {
    if (values.phone) {
      setValue(values.phone);
    }
  };


  return (
    <Create {...props}>
      <SimpleForm validate={validateUserCreation}>{props.children}</SimpleForm>
    </Create>
  );
};

export default GetCreate;
