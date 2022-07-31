import React, { useState } from "react"



const Functionalcomp=()=>{
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
        </div>
    )

    
}

export default Functionalcomp