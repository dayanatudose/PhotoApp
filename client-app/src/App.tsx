import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
