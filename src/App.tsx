import React from 'react';
import './App.css';

import Calculator from "./components/calculator/Calculator";

const App: React.FC = () => {


  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
     <Calculator></Calculator>
    </div>
  );
}

export default App;
