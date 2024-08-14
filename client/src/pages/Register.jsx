import React from "react";
import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import { FormRow } from "../components";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Register = () => {
  return (
    <Wrapper>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Form method="post">
        <h3>Register Here</h3>
        <FormRow
          type="text"
          name="firstName"
          defaultValue=""
          labelText="first name"
        />
        <FormRow
          type="text"
          name="lastName"
          defaultValue=""
          labelText="last name"
        />
        <FormRow type="text" name="location" defaultValue="" />
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <button className="submit-btn" type="submit" id="btn">
          Register
        </button>
        <p>
          Already a member?{" "}
          <Link className="home-link formred" to="/login">
            Login
          </Link>
        </p>
        <div className="social">
          <div className="go">
            <FaGoogle /> Google
          </div>
          <div className="fb">
            <FaFacebookF /> Facebook
          </div>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Register;
