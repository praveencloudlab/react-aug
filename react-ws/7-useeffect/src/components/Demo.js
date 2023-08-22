import {useState,useEffect} from 'react';

const Demo = () => {
  const[counter,setCounter] = useState(1);
  const[even,setEven] = useState(2);
  const[odd,setOdd] = useState(1);

  useEffect(()=>{
    console.log("1.useEffect::componentDidmount");
  },[]);//only one time in life cycle
  
  useEffect(()=>{
    console.log("2.useEffect::componentDidUpdate");
  });

  useEffect(()=>{
    console.log("useEffect::counter updated..");
  },[counter]);

  useEffect(()=>{
    console.log("useEffect::even-number updated..");
  },[even]);

  useEffect(()=>{
    console.log("useEffect::odd-number updated..");
  },[odd])

  useEffect(()=>{
    console.log("useEffect::counter/even updated..");
  },[counter,even]);


    return (
        <div>
            <h2>Counter: {counter}</h2>
      <h2>Even: {even}</h2>
      <h2>Odd: {odd}</h2>
      <hr/>
      <button onClick={()=>setCounter(counter+1)} >+</button>
      <button onClick={()=>setEven(even+2)} >Even-Increment</button>
      <button onClick={()=>setOdd(odd+2)} >Odd-Increment</button>
            
        </div>
    );
};

export default Demo;