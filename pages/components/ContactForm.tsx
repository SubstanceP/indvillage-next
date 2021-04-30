import React, { Component } from "react";
import axios from "axios";
import { FormControl, Button, TextField, FormHelperText, Select, InputAdornment, FormLabel, MenuItem }from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FaceIcon from '@material-ui/icons/Face';
import RoomIcon from '@material-ui/icons/Room';

interface ContactFormProps {};
interface ContactFormState {
    name: string,
    email: string, 
    message: string,
    phone: string,
    requestType: string,
    status: string
}


export default class ContactForm extends Component<ContactFormProps, ContactFormState> {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: '',
            message: "",
            requestType: '',
            status: "Submit"
<<<<<<< HEAD
        }
        render() {
    return(
    <div className="container">
        <div className="row">
            <form className="col s12" autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />




                
            </form>
=======
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeRequestType = this.handleChangeRequestType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            ...this.state,
            name: e.target.value
        })
    };
    handleChangeEmail(e) {
        this.setState({
            ...this.state,
            email: e.target.value
        })
    };
    handleChangePhone(e) {
        this.setState({
            ...this.state,
            phone: e.target.value
        })
    };
    handleChangeMessage(e) {
        this.setState({
            ...this.state,
            message: e.target.value
        })
    };
    handleChangeRequestType(e) {
        this.setState({
            ...this.state,
            requestType: e.target.value
        })
    };

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }


    render() {
        return(
        <div className="container">
            <div className="row">
                <form className="col s12" autoComplete="off" onSubmit={this.handleSubmit}>
                    <FormLabel>Contact Us</FormLabel>
                    <FormHelperText id="form-text">We’d love to hear from you. Please call, email or send us a message using the form below.</FormHelperText>
                    <br />
                    <FormControl component="fieldset" id="napervilleLocation" className="location">
                        <FormLabel>Naperville, Illinois</FormLabel>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                        }}>
                            <PhoneIcon/>
                            <a href="tel:+16303573922">(630) 357-3922</a>
                        </div>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                        }}>
                            <RoomIcon/>
                            <span>1030 Aurora Avenue, Naperville, IL 60540</span>
                        </div>
                    </FormControl>
                    <br />
                    <FormControl component="fieldset" id="rockfordLocation" className="location">
                        <FormLabel>Rockford, Illinois</FormLabel>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                        }}>
                            <PhoneIcon/>
                            <a href="tel:+18152829696">(815) 282-9696</a>
                        </div>
                        <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                        }}>
                            <RoomIcon/>
                            <span>3655 North Alpine Rd, Rockford, IL 61114</span>
                        </div>
                    </FormControl>
                    <br />
                    <TextField
                        id="name"
                        placeholder="Full Name"
                        onChange={this.handleChangeName}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FaceIcon />
                                </InputAdornment>
                            ),
                        }}

                    /> 
                    <TextField
                        id="email"
                        placeholder="Email"
                        onChange={this.handleChangeEmail}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="phone"
                        placeholder="Phone Number"
                        onChange={this.handleChangePhone}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <br />
                    <FormControl>
                        <Select
                            label="How can we assist you?"
                            onChange={this.handleChangeRequestType}
                            defaultValue="question"
                            id="selection"
                            >
                            <MenuItem value={"package"}>I'd like to receive your information package</MenuItem>
                            <MenuItem value={"tour"}>I'd like to schedule a tour</MenuItem>
                            <MenuItem value={"question"}>I have a general question or comment (below)</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="message"
                        placeholder="Question or Comment"
                        onChange={this.handleChangeMessage}
                        multiline
                        rows={4}
                    />
                    <Button type="submit" >Submit</Button>
                </form>
            </div>
>>>>>>> 603ec3ce6446818c9214be3e89c9651f88fa41f2
        </div>
        )
}
}
