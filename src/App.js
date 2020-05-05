import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import HeaderBar from './components/HeaderBar/HeaderBar'
import Main from './components/Main/Main'
function App() {


  return (
    <div>
      <Router>

        <HeaderBar></HeaderBar>
        <Main></Main>
      </Router>
    </div>
  );
}

export default App;
