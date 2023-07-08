import React from "react";
import logo from './logo.svg';
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
