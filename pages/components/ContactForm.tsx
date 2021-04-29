import React, { Component } from "react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';


interface ContactFormProps {};
interface ContactFormState {
    name: string,
    email: string, 
    message: string,
    status: "Submit"
}


export default class ContactForm extends React.Component {
        state = {
            name: "",
            email: "",
            message: "",
            status: "Submit"
        }
        render() {
    return(
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    )
    }
}
