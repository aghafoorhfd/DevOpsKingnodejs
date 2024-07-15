
import './App.css';
import React, { useState } from 'react';
function App() {
  const [buttonText1, setButtonText1] = useState('Students');
  const [buttonText2, setButtonText2] = useState('Students Details');

  const handleClick1 = () => {
    setButtonText1('Button 1 Clicked');
  };

  const handleClick2 = () => {
    setButtonText2('Button 2 Clicked');
  };
  return (
    <div className="App">
      <h1>DevOps King</h1>
      <button style={{ marginRight: '10px' }} onClick={handleClick1}>{buttonText1}</button>
      <button style={{ marginRight: '10px' }} onClick={handleClick2}>{buttonText2}</button>
    </div>
  );
}

export default App;
