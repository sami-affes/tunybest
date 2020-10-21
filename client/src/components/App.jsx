import React, { Component } from 'react';
import Home from './Home.jsx';
import Login from './Login.jsx';
import SignIn from './SignIn.jsx';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Home />
                <Login />
                <SignIn />
            </div>
        );
    }
}

export default App ;