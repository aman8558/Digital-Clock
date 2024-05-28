
import  React,{ useState ,useEffect} from "react";


function DigitalClock(){
    
   const [time,setTime]= useState(new Date());

   useEffect(() => {
     const intervalId=setInterval(() =>{
        setTime(new Date());
     },1000)

     return () =>{
        clearInterval(intervalId);
     }

   },[]);
   function formatTime(){
    let   hrs=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    const mrdn= hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;

    return `${padZero(hrs)}:${padZero(min)}:${padZero(sec)} ${mrdn}`;
   }


  function padZero(number){

    return (number<10 ? "0":"")+number;
  }

    return(
        <>
          <div className="clock-container">
             <div className="clock"> 
                <span>{formatTime()}</span>
             </div>

          </div>
        </>
    )
}
export default DigitalClock;
