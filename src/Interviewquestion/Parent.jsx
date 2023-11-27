import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
    const [dataFromChild, setDataFromChild] = useState('');
    const [childdata, setchilddata]=useState('');

    const data=(data)=>{
       setchilddata(data); 
    }

    const handleDataFromChild = (data) => {
      setDataFromChild(data);
      console.log("Child data in Parent cmp",data);
    };
  
    return (
      <div>
        <Child handleDataFromChild={handleDataFromChild} propsdata={data}/>
        <p>{dataFromChild}</p>
        <h3>Parent Component {childdata}</h3>
      </div>
    );
  };
  

export default Parent;
