import {useState} from 'react';
import Buttons from './components/Buttons';

const App = () => {
  let buttons=[10,20,15,-10,20,-15,30,-5,50,40,100];
  const[counterTotal,setCounterTotal] =useState(0)

  function calculateTotalHitsCount(label){
    setCounterTotal(label+counterTotal)
  }
  function resetAll(){
    setCounterTotal(0);
  }
  function renderButtons(){
    return buttons.map((btnLabel,idx)=>{
      return(
        <div className='col-3' key={idx}>
           <Buttons totalCount={counterTotal} parentFun={calculateTotalHitsCount} label={btnLabel}/>
        </div>
      )
    })
  }

  return (
    <div className='container'>

        <h1>App Component</h1> <hr/>
        <div className='card'>
          <div className='card-header'><h4>Counter App</h4></div>
          <div className='card-body'>
            <p className='text-center'><button onClick={resetAll}>Reset Counters</button></p>
           <div className='row'>
            {renderButtons()}
           </div>
          </div>
          <div className='card-footer text-center'>
            <h4>Total Count: {counterTotal}</h4>
          </div>
        </div>
       
        

      
    </div>
  );
};

export default App;