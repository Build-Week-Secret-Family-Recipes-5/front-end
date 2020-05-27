import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

<<<<<<< HEAD
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
=======
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>,
>>>>>>> 8117a2d100dbe06c643647bb816ada14db3dabdf
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
