import React, { useState } from "react";

function ChildComponent({onSendData}) {
  const handleSendData = () => {
    onSendData("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleSendData}>Send Data to Parent</button>
    </div>
  );
}

function ParentComponent() {
  const [receivedData, setReceivedData] = useState(null);

  const handleReceiveData = (data) => {
    // Update the state in the parent component with the received data
    setReceivedData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Received Data: {receivedData}</p>
      <ChildComponent onSendData={handleReceiveData} />
    </div>
  );
}

export default ParentComponent;
