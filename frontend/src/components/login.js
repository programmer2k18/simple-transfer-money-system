import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Login extends Component{

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }

        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.login = this.login.bind(this);
    }

    email(event) { this.setState({ email: event.target.value } ) }
    password(event) { this.setState({ password: event.target.value }) }

    login(event) {

        if (this.validateInputs() !== true){
            alert(this.validateInputs()); return;}

        alert("Success");

        /*const query = gql`{ login(
                email: "ahmed612@gmail.com"
                password: "123456789"
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
        if (this.state.email ==="" || !this.validateEmail(this.state.email))
            error += "Email is required! and should be valid\n";
        if (this.state.password === "" || this.state.password.length < 8)
            error += "Password is required with min 8 characters!\n";

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

                        <h3>Login</h3>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" name="email" onChange={this.email} className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" onChange={this.password} className="form-control" placeholder="Enter password" />
                        </div>

                        <button onClick={this.login} className="btn btn-primary btn-block">Login</button>

                </div>
            </div>

        );
    }

}

export default Login;