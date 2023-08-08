import React from "react";
import logo from './logo.svg';
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
