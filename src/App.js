import logo from './logo.svg';
import './App.css';
import CheckUseReducer from './components/useReducer';
import CheckUseMemo from './components/useMemo';
import CheckUseEffect from './components/useEffect';

function App() {
  return (
    <div className="App">
      {/* <CheckUseReducer /> */}
      <CheckUseMemo/>
      {/* <CheckUseEffect/> */}

    </div>
  );
}

export default App;
