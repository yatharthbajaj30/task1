import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import "./App.css"
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
    </Router>
  );
}

export default App;