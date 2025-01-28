import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./log.css"


const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters") 
        .required("Username is required"), 
      email: Yup.string()
        .email("Invalid email format") 
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters") 
        .required("Password is required"), 
    }),
    onSubmit: (values) => {
    
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={formik.handleSubmit} className="box">
          <h1>Sign Up</h1>

          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="error">{formik.errors.username}</div> 
            ) : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div> 
            ) : null}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
