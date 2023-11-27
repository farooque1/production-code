import React, { useState } from "react";

function Updatecomponent(OriginalComponent) {
  function NewComponent() {
    const [Number, setNumber] = useState(5);

    const Inc = () => {
      setNumber(Number * 2);
      console.log(Number);
    };
    
    return <OriginalComponent Inc={Inc} Number={Number} />;
  }
  return NewComponent;
}

export default Updatecomponent;
