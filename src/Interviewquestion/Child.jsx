import React, { useState } from "react";

const Child = ({ handleDataFromChild, propsdata }) => {
  const [inputData, setInputData] = useState("");
  const [data, setdata] = useState("xyz");

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDataFromChild(inputData);
    console.log("Child Input Value", inputData);
  };

  const handlemsg = () => {
    setdata(propsdata);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputData} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      Child props value {data}

      <button onClick={handlemsg}>Send props</button>
    </>
  );
};

export default Child;
