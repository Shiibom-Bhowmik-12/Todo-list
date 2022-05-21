import './App.css';
import Main from './Components/main';
import {MyContextProvider} from './Context';

function App() {
  return (
    <div>
      <MyContextProvider>
         <Main/>
      </MyContextProvider>
    </div>
  );
}

export default App;
