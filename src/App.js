import React from 'react';
import './App.css';
import {  
  Routes, 
  Route 
} from "react-router-dom";
import Header from "./components/layout/Header";
import HeaderLogin from "./components/layout/HeaderLogin";
import Main from './components/Main';
import SignUp from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
    <>
        <Routes>
          <Route path="/header" element={<Header/>}/>
          <Route path="/headerlogin" element={<HeaderLogin/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>      
    </>
    </div>
  );
}

export default App;
