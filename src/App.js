import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Home";
import ItWorks from "./ItWorks";
import GetSupport from "./FoodBanks/GetSupport";
import GiveSupport from "./FoodBanks/GiveSupport";
import AboutUs from "./AboutUs";
import Recipes from "./Recipes/Recipes";


import './App.css';

class App extends Component {
  render() {
    return (
     <div className="App">
 <Router>
      <Switch>
        <Route path="/home">
          <Navbar />
          <Home />
          <Footer />
        </Route>

        <Route path="/itworks">
          <Navbar />
          <ItWorks />
          <Footer />
        </Route>

        <Route path="/givesupport">
          <Navbar />
          <GiveSupport />
          <Footer />
        </Route>
     

        <Route path="/getsupport">
          <Navbar />
          <GetSupport />
          <Footer />
        </Route>


        <Route path="/recipes">
          <Navbar />
          <Recipes />
          <Footer />
        </Route>
        <Route path="/aboutus">
          <Navbar />
          <AboutUs />
          <Footer />
        </Route>
    </Switch>
     </Router>
     
      </div>
    );
  }
}

export default App;
