import React from 'react';
import './App.css';
import Home from './components/home/home';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from './components/about/about';
import Contact from "./components/contact/contant";
import SignUp from './components/auth/signUp';
import Login from './components/auth/login';

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
         <Route exact path="/" component= {Home} />
         <Route path="/about" component= {About} />
         <Route path="/contact" component= {Contact} />
         <Route path="/login" component= {Login} />
         <Route path="/signup" component= {SignUp} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
