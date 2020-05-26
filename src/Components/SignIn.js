import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";


export default class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
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
        <form
          // onSubmit={this.handleSubmit}
          className="FormFields"
          onSubmit={this.handleSubmit}
        >
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
            <Button variant="contained" color="teal" fluid size="large">Sign In</Button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}










// import React, { useState } from "react";
// import { axiosWithAuth } from "../utill/axiosWithAuth";
// import styled from "styled-components";

// // Material UI
// import { TextField, Button } from "@material-ui/core";

// function SignIn(props) {
//   console.log("app props: ", props);

//   const [cred, setCred] = useState({
//     credentials: {
//       username: "",
//       password: "",
//     },
//   });

//   const handleChange = (e) => {
//     setCred({
//       credentials: {
//         ...cred.credentials,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   const signin = (e) => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post("/signin", cred.credentials)
//       .then((res) => {
//         console.log("res ", res);
//         localStorage.setItem("token", res.data.payload);
//         props.history.push("/recipes");
//       })
//       .catch((err) => {
//         console.log("error login: ", err);
//       })
//       .finally(() => window.location.reload());
//   };

//   return (
//     <Container>
//       <form onSubmit={signin}>
//         <TextField
//           id="standard-basic"
//           type="text"
//           name="username"
//           label="Username"
//           value={cred.credentials.username}
//           onChange={handleChange}
//         />
//         &nbsp;
//         <TextField
//           id="standard-basic"
//           type="password"
//           name="password"
//           label="Password"
//           value={cred.credentials.password}
//           onChange={handleChange}
//         />
//         <br />
//         <Button
//           className="log-in-btn"
//           variant="contained"
//           color="primary"
//           type="submit"
//         >
//           Sign In
//         </Button>
//       </form>
//     </Container>
//   );
// }

// const Container = styled.div`
//   .log-in-btn {
//     margin: 10px 0px;
//   }
// `;

// export default SignIn;
