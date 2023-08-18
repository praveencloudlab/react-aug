import React from 'react';
import Home from './components/Home';
const App = () => {
  return (
    <div className='container'>
      <div className='alert alert-info text-center'>
          <h1>Welcome to App Component</h1>
      </div>

      <Home/>
    </div>
  );
};

export default App;