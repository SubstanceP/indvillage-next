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
    <div className="container">
        <div class="row">
            <form className="col s12" autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate"></input>
                        <label for="email">Email</label>
                        <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
}
