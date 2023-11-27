import React, { useState } from 'react'

const Child=({msgsend})=>{

    const handledata=()=>{
        msgsend("hello props")
    }

    return(
        <>
          <h3>Child data</h3>
          <button onClick={handledata}>send child props</button>  
        </>)
}

function Props() {

    const [Receive, setReceive]=useState(null);

    const handleReceive=(data)=>{
      setReceive(data);  
    }
    
    return (
    <div>
      <h2>Props Receive:- {Receive}</h2>  
    <Child msgsend={handleReceive} />
    </div>
  )
}

export default Props