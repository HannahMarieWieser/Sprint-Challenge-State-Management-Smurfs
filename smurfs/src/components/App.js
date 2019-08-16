import React, { Component } from "react";
import "./App.css";
import SmurfList from './nestComponents/SmurfList'
import OnboardSmurf from './nestComponents/smurfForm'

function App(){
    return (
      <div className="App">
        <OnboardSmurf/>
        <SmurfList/>
      </div>
    );
}

export default App;
