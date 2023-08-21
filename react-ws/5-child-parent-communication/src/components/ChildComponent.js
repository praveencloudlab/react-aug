import React from 'react';

const ChildComponent = (props) => {
    let {greetMsg,parentFun}=props

    function sendDataToParent(e){
        parentFun(e.target.value);
    }


    return (
        <div>
            <h1>ChildComponent - {greetMsg}</h1> <hr/>
            <input onKeyUp={(e)=>sendDataToParent(e)} type="text" placeholder='type greetinngs..'/> <br/>
            <button >Greet Back</button>
        </div>
    );
};

export default ChildComponent;