"use client"
import { useState } from "react"

export const Counter = () =>{
    const [count, setcount] = useState(0);
    return(
     <button onClick={ () => setcount(count+1)}>Clicked {count} times</button>   
    )
}