import React from "react";
import { CreateButton, useListContext } from "react-admin"

const Empty = () => {
    const {basePath} = useListContext()
    return (
        <CreateButton basePath={basePath}/>
    )
}

export default Empty
