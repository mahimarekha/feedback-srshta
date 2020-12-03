import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import Rating from "./Components/Rating";
import Login from "./Components/Login/Login";
import RatingType from "./Components/RatingType";
import YesNo from "./Components/YesNo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Multiple from "./Components/Multiple";
import UserRating from "./Components/UserRating";
import UserYesorNo from "./Components/UserYesorNo";
import UserMultiple from "./Components/UserMultiple";
import Catogery from "./Components/Catogery";
import Star from "./Components/Star";
import CategoryByQA from "./Components/CategoryByQA";
import CategoryList from "./Components/CategoryList";
class App extends Component {
  render() {
    const isValid =  JSON.parse(sessionStorage.getItem("user"));
     const getNavBar = ()=>{
       if(isValid && isValid.id &&
        !window.location.pathname.includes('userrating') && 
        !window.location.pathname.includes('multiple') &&
        !window.location.pathname.includes('useryesorno') &&
        !window.location.pathname.includes('register')){
        return (<nav>
          <div class="header heade ">
            <a href="#default" class="logo">
             <img  className="class"src="https://srshta.com/images/srshta-logo.png"/>
            </a>
            <div class="header-right heade-right">
              <a class="active" href="/CategoryList">
                Category List
              </a>
              <a href="/Star">User Query</a>
            </div>
          </div>
        </nav>);
       }else {
         return '';
       } 
     };
    return (
      <div className="App">
        <Router>
          <div>
            {getNavBar()}
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
              <Route path="/userrating/:catId/:userId">
                <UserRating />
              </Route>
              <Route path="/useryesorno/:catId:userId">
                <UserYesorNo />
              </Route>
              <Route path="/usermultiple/:catId:userId">
                <UserMultiple />
              </Route>
              <Route path="/catogery">
                <Catogery />
              </Route>
              <Route path="/star">
                <Star />
              </Route>
              <Route path="/categorybyqa">
                <CategoryByQA />
              </Route>
              <Route path="/categorylist">
                <CategoryList />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
