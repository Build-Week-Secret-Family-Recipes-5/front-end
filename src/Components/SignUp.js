import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your full name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              {/* <a href="" className="FormField__TermsLink"> */}
              terms of service
              {/* </a> */}
            </label>
          </div>

          <div className="FormField">
            <Button variant="contained" color="teal" fluid size="large">
              Sign In
            </Button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}





// import React, { useState, useEffect } from "react";
// import { Form, Field, withFormik } from "formik";
// import * as Yup from "yup";
// import "./SignUp.css";
// import axios from "axios";

// const SignUpForm = ({ errors, touched, values, status }) => {
//   //const [data, setData] = useState([]);

//   // useEffect(() => {
//   //   status && setUser(users => [...users, status]);
//   // }, [status]);

//   return (
//     <Form>
//       <div className="container">
//         <h1>Register</h1>
//         <p>Please fill in this form to create an account.</p>
//         <hr></hr>
//         <label htmlFor="email">
//           <b>Email</b>
//         </label>
//         <Field
//           type="text"
//           name="email"
//           placeholder="Enter Email"
//           value={values.email}
//         />
//         {touched.email && errors.email && <p>{errors.email}</p>}

//         <label htmlFor="password">
//           <b>Password</b>
//         </label>
//         <Field
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={values.password}
//         />
//         {touched.password && errors.password && <p>{errors.password}</p>}

//         <label htmlFor="role">
//           <b>Role</b>
//         </label>
//         <Field component="select" name="role" id="role">
//           <option>Select Role</option>
//           <option>Company</option>
//           <option>Job Seeker</option>
//         </Field>
//         {touched.role && errors.role && <p>{errors.role}</p>}

//         <hr></hr>
//         <button type="submit" className="registerbtn">
//           Register
//         </button>
//       </div>
//       <div className="container signin">
//         <p>
//           Already have an account? <a href="#">Sign in</a>.
//         </p>
//       </div>
//     </Form>
//   );
// };

// // higher order component
// const FormikMyForm = withFormik({
//   mapPropsToValues({ name }) {
//     return {
//       email: "",
//       password: "",
//     //   role: "",
//     };
//   },

//   validationSchema: Yup.object().shape({
//     email: Yup.string()
//       .email("Please enter a valid email.")
//       .required("Please enter an email."),
//     password: Yup.string()
//       .required("Please enter password.")
//       .min(8, "Password is too short - should be 8 chars minimum."),
//     // role: Yup.string()
//     //   .oneOf(["Company", "Job Seeker"])
//     //   .required("Please select role."),
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//     console.log("Submitting form:", values);

//     axios
//       .post("https://droom1.herokuapp.com/api/auth/register", values)
//       // just put in a url you want data from
//       .then((res) => {
//         console.log("Success:", res);
//         setStatus(res.data);
//         resetForm();
//       })
//       // do stuff with whatever gets returned
//       .catch((err) => {
//         console.log("Error:", err.response);
//       });
//     // if there's an error, handle it
//   },
// })(SignUpForm);

// export default FormikMyForm;
