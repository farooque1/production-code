import React, { useEffect, useState } from 'react'
import './style.css';

function Test2() {

  const [bgcolor,setbgcolor]=useState('red');
  const [Number, setNumber]=useState(0);

  const bgcolorchange=()=>{
    setbgcolor('blue');
  }

  const Inc=()=>{
    setTimeout(() => {
      // setNumber(()=>{
      //   Number+1
      // });
      setNumber(Number+1);
      console.log(Number);
    }, 2000);
  }

useEffect(()=>{
    Inc();
},[])

  return (
    <div>
    Test2
    <button style={{backgroundColor:bgcolor}} onClick={bgcolorchange}>Change color</button>
    <button onClick={Inc}>Incress me {Number}</button>
    <div className='mobile'>Mobile view</div>
    <div className='desktop'>Desktop view</div>
    </div>
    
  )
}

export default Test2