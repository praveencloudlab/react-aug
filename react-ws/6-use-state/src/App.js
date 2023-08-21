import {useState} from 'react';

const App = () => {
  const[counter,setCounter]=useState(1);
  const[even,setEven] = useState(2);
  const[odd,setOdd] = useState(1);
  function updateCounter(){
  if(counter>=1)
  setCounter(counter-1);
  }
  return (
    <div className='container'>

      <h1>Counter APP</h1> <hr/>

      <h1>Counter: {counter}</h1>
      <h1>Even: {even}</h1>
      <h1>Odd:{odd}</h1>
      <br/>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>updateCounter()}>Decrement</button> 
      <hr/>
      <button onClick={()=>setEven(even+2)}>Even-Increment</button>
      <button onClick={()=>setEven(even+2)}>Even-Decrement</button>
      <hr/>
      <button onClick={()=>setOdd(odd+2)}>Odd-Increment</button>
      <button onClick={()=>setOdd(odd-2)}>Odd-Increment</button>




      
    </div>
  );
};

export default App;