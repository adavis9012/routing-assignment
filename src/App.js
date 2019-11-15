import React from 'react';
import {BrowserRouter, Link, Route} from "react-router-dom";
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
           <Route exact path="/users/" component={Users}/>
           <Route path="/courses/" component={Courses}/>
       </div>
   </BrowserRouter>
  );
}

export default App;
