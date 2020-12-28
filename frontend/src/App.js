import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Nav from "./components/Nav";
import Login from "./components/login";
import Signup from "./components/signup";
import TransferMoney from "./components/transferMoney";
import Transactions from "./components/transactions";

function App() {
  return (

      <div className="App">
          <Router>
              <div>
                  <Nav />
                  <Switch>

                      <Route path="/" exact component={home}/>
                      <Route path="/login" exact component={Login}/>
                      <Route path="/signup" exact component={Signup}/>
                      <Route path="/transactions" exact component={Transactions}/>
                      <Route path="/transfer" exact component={TransferMoney}/>

                  </Switch>
              </div>
          </Router>
    </div>
  );
}

const home = ()=>(
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
