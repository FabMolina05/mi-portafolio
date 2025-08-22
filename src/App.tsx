import React, { useState } from 'react';
import './App.css';

function App() {
  const [number,SetNumber] = useState(5)

  const changeNumber = () =>{
      SetNumber(2)

  }
  return (
    <div className="App">
      {number}
      <button onClick={changeNumber}>Cambiar Numero</button>
    </div>
  );
}

export default App;
