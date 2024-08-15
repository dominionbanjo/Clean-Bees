import React from "react";
import { Form } from "react-router-dom";

const ContactSection = () => {
  return (
    <div id="section1" className="contact-us-page">
      <h1>CONTACT US FOR A FREE QUOTE!</h1>
      <Form method="post">
        <div className="form-group-a">
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="text" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-group-b" id="section1">
          <input
            className="lll"
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <input
            className="lll bbb"
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          />
          <button type="button">Submit</button>
        </div>
      </Form>
    </div>
  );
};

export default ContactSection;
