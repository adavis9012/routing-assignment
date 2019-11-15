import React from 'react';
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";

function App() {
  return (
   <BrowserRouter>
       <div className="App">
           <ul>
               <li><Link to="/users/">Users</Link></li>
               <li><Link to="/courses/">Courses</Link></li>
           </ul>
           <Switch>
               <Route exact path="/users" component={Users}/>
               <Route path="/courses" component={Courses}/>
               <Redirect from="/all-courses" to="/courses"/>
               <Redirect exact from="/" to="/courses"/>
               <Route render={() => (<h1>This is a simple 404 Error <small>This page doesn't exist</small></h1>)}/>
           </Switch>
       </div>
   </BrowserRouter>
  );
}

export default App;
