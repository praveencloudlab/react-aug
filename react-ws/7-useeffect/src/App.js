import Demo from "./components/Demo";
import { useState } from "react";
const App = () => {

  const[showDemo,setShowDemo] =useState(true);
  return (
    <div className='container'>
      <h1>App Component</h1> <hr/>
     
     {showDemo?<Demo/>:null}
     <hr/>
     {showDemo?<button onClick={()=>setShowDemo(false)}>Delete Demo</button>:''}
     {showDemo?'':<button onClick={()=>setShowDemo(true)}>Show Demo</button>}
     




    

    </div>
  );
};

export default App;