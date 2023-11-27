import React, { useState } from 'react'
import Updatecomponent from './HOC'

function personhoc({Inc,Number}) {

  return (
    <div>
    <h1> person 1 </h1>
    <button onClick={Inc}>Incress Number {Number}</button>
   </div>
  )
}

export default Updatecomponent(personhoc)