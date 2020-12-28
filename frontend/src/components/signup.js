import React, { Component } from "react";
import {Link, BrowserRouter} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";


class Signup extends Component{

    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }

        this.name = this.name.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.password_confirmation = this.password_confirmation.bind(this);
        this.register = this.register.bind(this);

    }

    email(event) { this.setState({ email: event.target.value } ) }
    name(event) { this.setState({ name: event.target.value } ) }
    password(event) { this.setState({ password: event.target.value }) }
    password_confirmation(event) { this.setState({ password_confirmation: event.target.value }) }

    register(event) {

        if (this.validateInputs() !== true){
            alert(this.validateInputs()); return;}

        alert("Success");

        /*const query = gql`{ signup(
                name: "yasser"
                email: "yasser612@gmail.com"
                password: "123456789"
                password_confirmation: "123456789"
            ){
                user{
                    id
                    name
                    email
                }
                token
             }
            }`;


        const { data, loading, error } = useQuery(query);*/
        // console.log(data);
        // console.log(loading);
        // console.log(error);

    }

    validateInputs(){
        let error = '';

        if (this.state.name ==="")
            error += "Name is required!\n";
        if (this.state.email ==="" || !this.validateEmail(this.state.email))
            error += "Email is required! and should be valid\n";
        if (this.state.password === "" || this.state.password.length < 8)
            error += "Password is required with min 8 characters!\n";
        if (this.state.password !== this.state.password_confirmation)
            error += "Password should match!\n";

        if (error)
            return error;
        return true;
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {

        return (
            <div className="auth-wrapper">
                <div className="auth-inner">

                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" onChange={this.name} className="form-control" placeholder="Full Name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" onChange={this.email} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.password} className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="password" onChange={this.password_confirmation}  name="password_confirmation" className="form-control" placeholder="Confirm Password" />
                        </div>

                        <button onClick={this.register} className="btn btn-primary btn-block">Sign Up</button>

                        <p className="forgot-password text-right">
                            Already registered
                            <BrowserRouter>
                                <Link to={"/login"}>
                                    Sign in?
                                </Link>
                            </BrowserRouter>
                        </p>
                </div>
            </div>

        );
    }

}
export default Signup;