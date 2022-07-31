import React, { useState } from "react"
import Proprietate from "./prop1"


const Functionalcomp=(prop)=>{
    const [color,setColor]=useState("white")
    const handleClick1=()=>{

    return setColor("yellow")

  }
  const handleClick2=()=>{

    return setColor("pink")

  }


   
    return (
        <div style={{backgroundColor:color}}>
        <button onClick={handleClick1}>Click here</button>
        <button onClick={handleClick2}>Click here</button>
        {<p>{color}</p>}
        {<p>{prop.textProp}</p>}
        </div>
    )

    
}

export default Functionalcomp