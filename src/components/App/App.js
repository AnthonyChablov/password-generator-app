import {useState, createContext, useContext} from "react";
import Title from '../Title/Title';
import ContentDisplay from '../ContentDisplay/ContentDisplay';
import ContentParameters from '../ContentParameters/ContentParameters';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Title/>
        <ContentDisplay/>
        <ContentParameters/>
        
      </div>
    </div>
  );
}

export default App;
