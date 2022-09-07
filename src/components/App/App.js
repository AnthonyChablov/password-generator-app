
import Title from '../Title/Title';
import ContentDisplay from '../ContentDisplay/ContentDisplay';
import ContentParameters from '../ContentParameters/ContentParameters';
import AppContextProvider from "../../context/GlobalContext";

function App() {
  return (  
    <AppContextProvider>
      <div className="app">
        <div className="container">
          <Title/>
          <ContentDisplay/>
          <ContentParameters title={'Character Length'}/>
        </div>
      </div>
    </AppContextProvider>
  );
}

export default App;
