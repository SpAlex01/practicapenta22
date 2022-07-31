import React, { useState } from "react"


const Functionalcomp=()=>{
    const [color,setColor]=useState("black")
    const handleClick=()=>{

        setColor("white")
    }
    
    return (
        <><div><button onClick={handleClick}>Click  here</button></div><div> <p>{color}</p></div></>
    )
}

export default Functionalcomp