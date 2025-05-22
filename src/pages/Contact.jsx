import React from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import { ChakraProvider } from "@chakra-ui/react";


const Contact = () => {
    return (
        <div className="contact">
            <br></br>
            <h1>Contact</h1>
            <br></br>
            <p>For general inquiries, feedback, or job opportunities, please contact me through <a href="https://www.linkedin.com/in/robwittstock/" target="_blank">Linkedin</a> or the form below.</p>
            <br></br>
            <ContactForm />
        </div>
    )
}

export default Contact;