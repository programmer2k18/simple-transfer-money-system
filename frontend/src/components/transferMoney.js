import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class TransferMoney extends Component {

    constructor() {
        super();

        this.state = {
            account: '',
            amount: 0.0,
        }

        this.account = this.account.bind(this);
        this.amount = this.amount.bind(this);
        this.transfer = this.transfer.bind(this);
    }

    account(event) { this.setState({ account: event.target.value } ) }
    amount(event) { this.setState({ amount: event.target.value }) }

    transfer(event){
        alert("hhhhhhhhhhhhhhhh"+ this.state.amount);
    }
    cancel(event){

    }

    render() {

        return (

            <div className="App">

                <div className="container">
                    <div className="row">

                        <div className="col-sm-4 pushDown auth-inner">
                            <h3>Transfer Money</h3>
                            <h6>Current Balance: 25000 EGY</h6>
                        </div>

                        <div className="col-sm-8 returnTop">

                            <div className="auth-wrapper">
                                <div className="auth-inner">

                                    <h3>Transfer Money</h3>

                                    <div className="form-group">
                                        <label>Account | Code </label>
                                        <input type="email" name="email" onChange={this.account} className="form-control"
                                               placeholder="Enter Other Account"/>
                                    </div>

                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input type="number" name="amount" onChange={this.amount} min="1" defaultValue="1"
                                               className="form-control" placeholder="Enter Amount to be transfer"/>
                                    </div>

                                    <button onClick={this.transfer} className="btn btn-primary btn-block">Confirm</button>
                                    <button onClick={this.cancel} className="btn btn-danger btn-block">Cancel</button>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        );
    }
}
export default TransferMoney;