import React, { useState } from 'react'
import Updatecomponent from './HOC'

function Person2({Inc,Number}) {

  return (
    <div>
    <h1> person 2 </h1>
    <button onClick={Inc}>Incress Number {Number}</button>
   </div>
  )
}

export default Updatecomponent(Person2)