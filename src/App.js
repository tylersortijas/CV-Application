import "./App.css";
import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo.js";
import EducationalExp from "./components/EducationalExp.js";
import PracticalExp from "./components/PracticalExp.js";

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1>CV-App with React</h1>
        <div className="general-information">
          <h2>General Information</h2>
          <GeneralInfo />
        </div>
        <div className="educational-experience">
          <h2>Educational Experience</h2>
          <EducationalExp />
        </div>
        <div className="practical-experience">
          <h2>Experience Section</h2>
          <PracticalExp />
        </div>
      </div>
    );
  }
}

export default App;
