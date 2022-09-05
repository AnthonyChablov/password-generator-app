import {useState, createContext} from "react";
import Title from '../Title/Title';
import ContentDisplay from '../ContentDisplay/ContentDisplay';
import ContentParameters from '../ContentParameters/ContentParameters';

const AppContext = createContext(null);

function App() {
  const [password, setPassword] = useState('PTx1f5Dfafx');

  return (
    <AppContext.Provider value = {{password, setPassword}}>
      <div className="app">
        <div className="container">
          <Title/>
          <ContentDisplay/>
          <ContentParameters/>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
