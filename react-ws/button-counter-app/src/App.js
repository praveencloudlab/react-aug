import React, { useState } from 'react';
import ButtonCounter from './ButtonCounter';

function App() {
  const [totalSum, setTotalSum] = useState(0);
  const [resetCounter, setResetCounter] = useState(0);

  const handleButtonClick = (clickedNumber) => {
    setTotalSum(prevSum => prevSum + clickedNumber);
  };

  const handleReset = () => {
    setTotalSum(0);
    setResetCounter(prevCounter => prevCounter + 1);  // Increment the resetCounter
  };

  return (
    <div className="App container mt-5">
      <div className="row">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <div key={num} className="col-3">
            <ButtonCounter number={num} onButtonClick={handleButtonClick} reset={resetCounter} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <h2>Total Sum: {totalSum}</h2>
        <button className="btn btn-danger mt-3" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
