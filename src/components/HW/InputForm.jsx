import ButtonCom from "../ButtonCom";
import InputCom from "../InputField/InputCom";
import Message from "../TextAreaField/Message";
import React, { useState } from 'react'

const InputForm = () => {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showAlert = () => {
        if (name.length !== 0 && email.length !== 0 && message.length !== 0 && emailRegex.test(email)) {
                alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
            }
        }

    return (
        <form className="form">
            <InputCom value="Name" type="text" id="name"
                onChange={event => {
                    setName(event.target.value);
                }}/>
            <InputCom value="Email" type="email" id="email"
                onChange={event => {
                    setEmail(event.target.value);
                }} />
            <Message onChange={event => {
                setMessage(event.target.value);
            }} />
            <ButtonCom func={showAlert} />
        </form>
    );
};

export default InputForm;