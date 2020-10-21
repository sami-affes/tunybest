import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password: ""
        }
        this.check=this.check.bind(this);
    }
    check(e){
        e.preventDefault();
        console.log("user checked")
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.check(e)}>
                    <input type="text" placeholder="Your email" onChange={(e)=>{this.setState({email:e.target.value})}} value={this.state.email}/><br></br>
                    <input type="text" placeholder="Your password" onChange={(e)=>{this.setState({password:e.target.value})}} value={this.state.password}/><br></br>
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}

export default Login;