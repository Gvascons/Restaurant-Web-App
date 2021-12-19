import React from "react"
import AddForm from './addForm'

export default function Add(props){
    const {edit, editId, ...other} = props
    return(
        <AddForm
            edit = {edit}
            editId = {editId}
        />
    )
}