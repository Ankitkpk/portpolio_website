import { useState,useEffect } from 'react'
import Preloader from "../src/components/Pre";
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollTop from './components/ScrollTop.jsx';
import Resume from './components/Resume/Resume.jsx';
import Project from './components/Projects/Project.jsx';


function App() {
const [load,setLoad]=useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setLoad(false);
  }, 1200);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
    <Router>
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
       <NavBar />
       <ScrollTop/>
     <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </Router>
    
    </>
  )
}

export default App
