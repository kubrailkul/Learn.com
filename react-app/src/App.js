import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import NotFound from "./components/NotFound"
import React, { Component } from 'react'
import Basket from "./components/Basket"
import MyCourses from "./components/MyCourses"
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {



  deleteUser=(id)=>{

    this.setState({
      users:this.state.users.filter(user=>user.id!==id)
    })
  }
render() {
  const isAuth=false;
  return (

 <Router>
       <Navbar /> 
      <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/HomePage" element={<HomePage />} />
       <Route path="/Basket" element={<Basket />} />
       <Route path="/MyCourses" element={<MyCourses />} />
       
      </Routes>
    </Router>
  
  

  );
}

}
export default App;

