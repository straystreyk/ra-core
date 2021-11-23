import React from "react";
import { useRecordContext } from "react-admin";
import "../css/MyTextField.css";

function MyTextField({ source }) {
  const record = useRecordContext();
  if (record) {
    return <div className={"test"}>{record[source]}</div>;
  } else {
    return null;
  }
}

export default MyTextField;
