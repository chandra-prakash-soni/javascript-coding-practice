import React,{useEffect,useState} from "react";
const TrafficLight = ()=>{
 const colors = ["red","yellow","green"];
  const [activeColor, setActiveColor] = useState('red')
  useEffect(()=>{
    let sequence = 0;
     const timer =  setInterval(()=>{
      sequence = (sequence + 1) % colors.length;
        setActiveColor(colors[sequence])
      },1000)
      return ()=>clearInterval(timer)
  },[])
    return (
         <div style={{width:'3%', border:"1px solid black"}}>
        {colors.map(color=>(
          <div style={{border:'1px',padding:"2px", height:'40px', width:"40px", background:`${color===activeColor ? activeColor :  "grey" }`, borderRadius:"100%"}} />
        ))}        
      </div>
    );
};

export default TrafficLight;