import React, { useEffect, useState } from 'react'
  
const StopWatch = () => {
    const [time ,setTime] = useState(0)
    const [lap ,setLap] = useState([])
    //time starts from 0
    const[watchstatus ,setwatchstatus] = useState(false)
    const hours = parseInt(time/360000)
    // 1hr = 60min = 3600sec=3600000millisec
    const minutes = parseInt((time%360000)/6000) //but yha hmne 6000 isliye likha setinterval 10 sec ke interval pe jaa rha h
    // it starts when time equal to 6000 as 1min = 60sec=60000milli
    const seconds = parseInt((time%6000)/100)
     // it starts when time is 100 which is equal to 1 sec beacuse 1sec = 1000millisec
    const milliseconds = parseInt((time%100))
    //it dispaly time playing value time%100 as it becomes 0
    useEffect(()=>{
        let intervalId;
        if(watchstatus){
                  // setting time from 0 to 1 every 10 milisecond using javascript setInterval method

             intervalId = setInterval(()=>
                setTime( Number(time)+1)
            ,10)
        }
        return ()=> clearInterval(intervalId)
    },[watchstatus ,time])
  function startstop(){
           setwatchstatus(!watchstatus);
           
  }
  const handleLap = () => {
    if (watchstatus) {
      // const currentTime = new Date().getTime();
      // const elapsedTime = currentTime - startTime;
      let timelap ={
        hours,
        minutes,
        seconds,
        milliseconds
      }
      console.log(timelap)
      setLap(prevLaps => [...prevLaps, timelap]);
    }
    console.log(lap)
  };
  // console.log(arr)
  return (
    <div>
    <h1>StopWatch</h1>
     <div className="stopwatch-time">
     {/* padStart() method is a built-in function that is used to pad a string with another string to a specified length from the start of the original string. It is commonly used for formatting purposes, such as aligning text or generating fixed-width strings. */}

     {/* The padStart() method takes two arguments: the target length and the padding string. Here's the syntax: */}


            {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
        
     </div>  

     <div>
        <button onClick={startstop}>{watchstatus?'stop':'start'}</button>
        <button onClick={handleLap}>  Lap</button>
        <button onClick={()=>setTime(0)}>reset</button>
     </div> 
     <div>
      <h1>Lap Time</h1>
      <ul>
        {lap.map((time, index) => (
          <li key={index}>{time.hours}:{time.minutes.toString().padStart(2, "0")}:
        {time.seconds.toString().padStart(2, "0")}:
        {time.milliseconds.toString().padStart(2, "0")}</li>
        ))}
      </ul>
     </div> 
    </div>
  )
}

export default StopWatch