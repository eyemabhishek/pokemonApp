import React, { Component } from "react";
import "./App.css";
// import Ball from "./Ball";
// import Lottery from "./Lottery"
import WiseSquare from "./event";

function App() {
  return (
    <div className="App">
      <WiseSquare />
      {/* <Lottery />
      <Lottery title='Mini Daily' maxNum={40} numBalls={4}/> */}
    </div>
  );
}

export default App;
