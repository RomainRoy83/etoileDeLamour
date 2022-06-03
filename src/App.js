import { Routes, Route } from "react-router-dom";
import Header from "./components/js/Header";
import Home from "./screens/js/HomePage";
import HomepageBanner from "./components/js/HomepageBanner";
import DarkSide from "./screens/js/DarkSide";
import Questions from "./components/js/Questions.js";
import LightSide from "./screens/js/LightSide";
import Teaser from "./screens/js/Teaser";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomepageBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DarkSide" element={<DarkSide />} />
        <Route path="/LightSide" element={<LightSide />} />
        <Route path="/Teaser" element={<Teaser />} />
        <Route path="/Questions" element={<Questions />} />
      </Routes>
    </div>
  );
}

export default App;
