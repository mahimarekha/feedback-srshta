import React, { Component } from "react";

import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Login from "./Components/Login/Login";
import RatingType from "./Components/RatingType"
import YesNo from "./Components/YesNo"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Multiple from "./Components/Multiple";
import UserRating from "./Components/UserRating"
import UserYesorNo from "./Components/UserYesorNo"
import UserMultiple from "./Components/UserMultiple"
import Catogery from "./Components/Catogery"
class App extends Component{
    render(){
        return(
            
            <div className="App">
                 <Router>
      <div>
        <nav>
          <ul>
            
           
            
            <li>
              <Link to="/userrating">UserRating</Link>
            </li>
          </ul>
        </nav>

       
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
          <Home />
          </Route>
          <Route path="/rating/:catId">
          <Rating />
          </Route>
          <Route path="/ratingtype/:catId">
          <RatingType />
          </Route>
          <Route path="/yesno/:catId">
          <YesNo />
          </Route>
          <Route path="/multiple/:catId">
          <Multiple />
          </Route>
          <Route path="/userrating/:catId">
         
          <UserRating />
          </Route>
           <Route path="/useryesorno/:catId">
          <UserYesorNo />
          </Route>
          <Route path="/usermultiple/:catId">
          <UserMultiple />
          </Route>
           <Route path="/catogery">
          <Catogery />
          </Route>
        </Switch>
      </div>
    </Router>
                
            </div>
        )
    }
}
export default App;
