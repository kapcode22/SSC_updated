import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Club from "./components/club.js"
import Home from "./components/Home.js"
import Navbar  from "./components/Navbar.js";
import Team from './components/Team.js'
import Event from "./components/Events.js"
import SPC from  "./components/Spc.js"
import KU from "./components/Ku.js"
import HHC from  "./components/HHC.js"
import Sahyog from "./components/Sahyog.js"
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/club">
              <Club />
            </Route>
            <Route exact path="/team">
              <Team/>
            </Route>
          <Route exact path="/event">
            <Event/>
          </Route>
          <Route exact path="/spc">
            <SPC/>
          </Route>
          <Route exact path="/ku">
            <KU/>
          </Route>
          <Route exact path="/hhc">
            <HHC/>
          </Route>
          <Route exact path="/sahyog">
            <Sahyog/>
          </Route>
          

          </Switch>
      
    </div>
    </Router>
  );
}




