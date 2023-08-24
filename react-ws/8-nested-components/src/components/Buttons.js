import {useState,useEffect} from 'react';
const Buttons = (props) => {
    let {label,parentFun,totalCount} = props

    function buttonHitCounter(){
        setHitCounter(hitCounter+1)
        parentFun(label);
    }
    const[hitCounter,setHitCounter] =useState(0);
    
    useEffect(()=>{
        console.log(">>Changed: "+totalCount);
        if(totalCount==0){
            setHitCounter(0);
        }
    },[totalCount])

    return (
        <div className='card mb-3'>
            <div className='card-body text-center'>
            <span>Hits: {hitCounter}</span>
            <hr/>
            <button onClick={buttonHitCounter}>{label}</button>
            </div>
            
        </div>
    );
};

export default Buttons;