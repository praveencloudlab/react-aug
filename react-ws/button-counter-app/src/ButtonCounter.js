import React, { useState, useEffect } from 'react';

function ButtonCounter({ number, onButtonClick, reset }) {
  const [hitCount, setHitCount] = useState(0);

  useEffect(() => {
    if (reset) {
      setHitCount(0);
    }
  }, [reset]);

  const handleClick = () => {
    setHitCount(prevCount => prevCount + 1);
    onButtonClick(number);
  };

  return (
    <div className="card m-2 text-center">
      <div className="card-body">
        <h6 className="card-title">Clicks Count: {hitCount}</h6>
        <hr />
        <button className="btn btn-primary mb-2" onClick={handleClick}>
          {number}
        </button>
        <hr />
      </div>
    </div>
  );
}

export default ButtonCounter;
