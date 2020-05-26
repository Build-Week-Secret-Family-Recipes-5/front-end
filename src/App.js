import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import PrivateRoute from "./Components/PrivateRoute";
import NewRecipes from "./Components/NewRecipes";
import Recipes from "./Components/Recipes";

import "./App.css";

import RecipesImage from "./Images/eiliv-sonas-aceron.jpg";

export default class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <Image>
            <img src={RecipesImage} alt="recipes" />
          </Image>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/sign-in"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                <Button style={{ color: "white" }}>Sign In</Button>
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                <Button style={{ color: "white" }}>Sign Up</Button>
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                <Button variant="contained" color="teal" fluid size="large">
                  Sign In
                </Button>
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                <Button variant="contained" color="teal" fluid size="large">
                  Sign Up
                </Button>
              </NavLink>
            </div>
            <Switch>
              <PrivateRoute exact path="/recipes" component={Recipes} />
              <PrivateRoute exact path="/appRecipes" component={NewRecipes} />
              <Route exact path="/" component={SignUp}></Route>
              <Route path="/sign-in" component={SignIn}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const Image = styled.div`
  width: 50%;
  overflow: hidden;

  img {
    height: 100vh;
    width: 50vw;
  }
`;

// import React from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import styled from "styled-components";
// import PrivateRoute from "./Components/PrivateRoute";
// import SignIn from "./Components/SignIn";
// import SignUp from "./Components/SignUp";
// import NewRecipes from "./Components/NewRecipes";

// // image import
// import recipesImage from "./images/friends-together.jpg";

// // material ui
// import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
// import Recipes from "./Components/Recipes";

// function App() {
//   const signout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("token");
//     window.location.reload(false);
//   };

//   return (
//     <MainContainer>
//       <Router>
//         <Image>
//           <img src={recipesImage} alt="recipes" />
//         </Image>
//         <AppContainer>
//           <AppInnerContainer>
//             <ul>
//               {localStorage.getItem("token") === null ? (
//                 <h2>Login to RECIPES</h2>
//               ) : (
//                 <ProtectedContainer>
//                   <AppBar position="static">
//                     <Toolbar>
//                       <Typography variant="h6" className="title">
//                         <Link to="/recipes">Recipes</Link>
//                       </Typography>
//                       <Typography variant="h6" className="title">
//                         <Link to="/addRecipes">Add Recipes</Link>
//                       </Typography>
//                       <Button
//                         className="signout"
//                         color="inherit"
//                         onClick={signout}
//                       >
//                         signout
//                       </Button>
//                     </Toolbar>
//                   </AppBar>
//                 </ProtectedContainer>
//               )}
//             </ul>
//             <Switch>
//               <PrivateRoute exact path="/recipes" component={Recipes} />
//               <PrivateRoute exact path="/addRecipes" component={NewRecipes} />
//               <Route path="/login" component={SignIn} />
//               <Route component={SignIn} />
//             </Switch>
//           </AppInnerContainer>
//         </AppContainer>
//       </Router>
//     </MainContainer>
//   );
// }

// const MainContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const AppContainer = styled.div`
//   width: 45%;
// `;

// const AppInnerContainer = styled.div`
//   position: relative;
//   top: 200px;
//   left: 225px;
//   width: 400px;

//   ul {
//     padding-inline-start: 0px;
//   }
// `;

// const ProtectedContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   top: -200px;

//   .title {
//     padding: 0px 10px;

//     a {
//       color: white;
//       text-decoration: none;
//     }
//   }

//   li {
//     list-style: none;
//     padding: 5px;
//   }

//   .logout {
//     position: relative;
//     left: 100px;
//   }
// `;

// const Image = styled.div`
//   width: 55%;
//   overflow: hidden;

//   img {
//     height: 150vh;
//     width: 90vw;
//   }
// `;

// export default App;
