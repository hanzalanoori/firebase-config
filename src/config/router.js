import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Notfound from "../pages/notfound";
import Profile from "../pages/profile";
import Service from "../pages/service";
import SignIn from "../pages/signin";
import Signup from "../pages/signup";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
     
      <Route path="*" element={<Notfound />} />
      {/* <Route path="/" element={<Home />} />  */}
       {/* <Route path="/" element={<Signup />} /> */}
       <Route path="/" element={<SignIn />} />
       <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="/profile/:id" element={<Profile />} />
     
      
    </Routes>
    </Router>
  );
}
