import logo from './logo.svg';

import { Routes, Route } from "react-router-dom";
import Activities from './components/js/Activities';
import Header from "./components/js/Header";
import Home from "./screens/js/HomePage";
import HomepageBanner from './components/js/HomepageBanner';
import DarkSide from "./screens/js/DarkSide";
import Questions from './components/js/Questions.js';
import LightSide from "./screens/js/LightSide";
import Teaser from "./screens/js/Teaser";
import './App.css';


function App() {
  return (
    <div className="App">
      <Activities />
    </div>
  );
}

export default App;
