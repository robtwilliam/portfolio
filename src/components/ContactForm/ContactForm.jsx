import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactForm.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  message: Yup.string().min(10, "Comment must be at least 10 characters").required("Comment is required"),
});

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Thank you for reaching out! I will reply as soon as I am able.");
        fetch("https://formsubmit.co/d9b193682a45e1bc519fcdf96538dab4", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        })
        resetForm();
      }}
    >
      <Form className='contact-form'>
        <div className="form-contents">
          <label className="field-label">Name</label>
          <Field
            type="text"
            name="name"
            className="form-input"
          />
          <ErrorMessage name="name" component="div" className="error-msg" />
          <label className="field-label">Email</label>
          <Field
            type="email"
            name="email"
            className="form-input"
          />
          <ErrorMessage name="email" component="div" className="error-msg" />
          <label className="field-label">Comment</label>
          <Field
            as="textarea"
            name="message"
            height={250}
            rows={10}
            className="form-comment"
          />
          <ErrorMessage name="message" component="div" className="error-msg" />
        <button type="submit" className="submit-button" width="90px">
          Submit
        </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;