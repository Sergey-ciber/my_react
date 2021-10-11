import './App.css';
import React from 'react';

function App() {
  return (
    <div>
        <Header/>
      <div>First div</div>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JS</li>
      </ul>
    </div>
  );
}

const Header = () => {
    return(
        <div>Header</div>
    )
}

export default App;
