import React from "react";
import Home from "./components/home"
import PizzaForm from "./components/pizzaForm"
import Order from "./components/Order"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  
  return (

<Router>
<nav className="navbar">
  <h1> Yum Yum Pizza </h1>
  {/* <p>The best pizza in town!</p> */}
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/pizza">Order</Link>
  </li>
</nav>
<div className="App">
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/pizza" component={PizzaForm} />
    <Route path="/success" component={Order} />
  </Switch>
</div>
<nav className = "footer">
  <p>Copyright 2020</p>
</nav>
</Router>
  );
};
export default App;
