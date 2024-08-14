import React from "react";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/LoginAndRegister";
import { FormRow } from "../components";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("Login successful");
      return redirect("/homepage");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"; // Correct comparison

  return (
    <Wrapper>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Form method="post">
        <h3>Login Here</h3>
        <FormRow type="email" name="email" defaultValue="" />
        <FormRow type="password" name="password" defaultValue="" />
        <button
          className="submit-btn"
          type="submit"
          id="btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in" : "Log In"}
        </button>
        <p>
          Don't have an account?{" "}
          <Link className="home-link formred" to="/register">
            Register
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

export default Login;
