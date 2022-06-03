import './App.css';
import React, {createContext} from 'react';
import CheckUseReducer from './components/useReducer';
import CheckUseMemo from './components/useMemo';
import CheckUseEffect from './components/useEffect';
import CheckUseContext from './components/useContext';

export const UserContext = createContext()

function App() {

  const userValue = 'Chamath'

  return (
    <UserContext.Provider value={userValue}>
      {/* <CheckUseReducer /> */}
      {/* <CheckUseMemo/> */}
      {/* <CheckUseEffect/> */}
      <CheckUseContext />
    </UserContext.Provider>
  );
}

export default App;
