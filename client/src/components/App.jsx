import React, { Component } from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import SignIn from './SignIn.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    render() {
        return (
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Signin">Signin</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

}
}

export default App ;