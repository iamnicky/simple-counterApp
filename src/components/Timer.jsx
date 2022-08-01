import React, { useEffect, useState } from 'react'
var timer;
const Timer = () => {

const [seconds,setSeconds]=useState(0);
const [minutes,setMinutes]=useState(0);
const [hours,setHours]=useState(0);

useEffect(()=>{
 timer=setInterval(()=>{
      setSeconds(seconds+1);
      if(seconds===59){
        setMinutes(minutes+1);
        setSeconds(0);
    }
        
      
      if (minutes===59){
        setHours(hours+1);
        setMinutes(0);
    }
 },1000)
 return ()=> clearInterval(timer);
})

const restart=()=>{
    setSeconds(0);
    setMinutes(0);
};

const stop=()=>{
     clearInterval(timer);
};
    return (

        <div className='bg-gray-200  shadow-xl shadow-green-500 border-2 rounded-xl p-4 '>
            <h1 className=' text-2xl font-bold flex justify-center'>COUNTDOWN</h1>
           
            <h1 className='flex justify-center text-8xl font-bold'>{hours<10?"0"+hours:hours}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h1>
            <button className='m-4 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={restart}>Restart</button>
            <button className=' mx-8 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded h-12 p-4 ' onClick={stop}>Stop</button>
        </div>

    )
};

export default Timer