let indianClock=document.getElementById("indianClock");
let dubaiClock=document.getElementById("dubaiClock");
let americanClock=document.getElementById("americanClock");

let indianClockV1=document.getElementById("indianClockV1");
let dubaiClockV1=document.getElementById("dubaiClockV1");
let americanClockV1=document.getElementById("americanClockV1");

// js function
function jsClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let template=`
        <div>
            <div>${props}</div>
            <p> ${time}</p>
        </div>
    `
    return template;
}

// React function

function reactClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:props});
    let template=
        <div>
            <div>{props}</div>
            <p>{time}</p>
        </div>
    return template;
}


setInterval(()=>{
    indianClock.innerHTML=jsClock('asia/kolkata');
    dubaiClock.innerHTML=jsClock('asia/dubai');
    americanClock.innerHTML=jsClock('america/new_york');
    // react

    ReactDOM.render(reactClock('asia/kolkata'),indianClockV1)
    ReactDOM.render(reactClock('asia/dubai'),dubaiClockV1)
    ReactDOM.render(reactClock('america/new_york'),americanClockV1)

},1000)

