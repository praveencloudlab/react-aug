import {useState} from 'react';
import ChildComponent from './components/ChildComponent';

const App = () => {

  const[childMsg,setChildMsg]=useState('default message..');

  const msg="Goood Morning";
  //let childMsg='';

  function receiveGreetings(greetings){
   //childMsg=greetings;
   //console.log(childMsg);
   // set greetings to state object
   setChildMsg(greetings);
  }

  return (
    <div className='container'>
      <h1>App component</h1>
      <h2>{childMsg}</h2>
      <hr/>
      <ChildComponent parentFun={receiveGreetings} greetMsg={msg}/>
    </div>
  );
};

export default App;