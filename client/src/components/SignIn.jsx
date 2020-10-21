import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email: "",
            password: "",
            phone: "",
            address: "",
        }
        this.addUser=this.addUser.bind(this);
    }
    addUser(e){
        e.preventDefault();
        console.log("added new user")
    }
    render() {
        return (
            <div>
                <form OnSubmit={(e)=>this.addUser(e)}>
                    <input type="text" placeholder="First Name" onChange={(e)=>{this.setState({firstName:e.target.value})} } value={this.state.firstName}/><br></br>
                    <input type="text" placeholder="Last Name" onChange={(e)=>{this.setState({lastName:e.target.value})} } value={this.state.lastName}/><br></br>
                    <input type="text" placeholder="Email" onChange={(e)=>{this.setState({email:e.target.value})} } value={this.state.email}/><br></br>
                    <input type="password" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})} } value={this.state.password}/><br></br>
                    <input type="text" placeholder="Phone Number" onChange={(e)=>{this.setState({phone:e.target.value})} } value={this.state.phone}/><br></br>
                    <input type="text" placeholder="Address" onChange={(e)=>{this.setState({address:e.target.value})} } value={this.state.address}/><br></br>
                    <input type="submit" value="Sign In"/>
                </form>
            </div>
        );
    }
}

export default SignIn;