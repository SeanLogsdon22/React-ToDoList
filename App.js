import React, { useRef, useEffect, useState } from "react";

function App() {
  //const dataArray = [];

  const editRef = useRef();
  const [monitor, setMonitor] = useState([]);

  const onClickButton = (editRef, setMonitor) => {
    let current = editRef.current.value;
    setMonitor(array => [...array, current])
    //alert('adding ' + current)
  }

  const List = (props) => {
    let array = props.monitor.map((item) => 
      <li>{item}</li> 
    )
    //props.setMonitor(array);
    //alert(array)
    return array;
  }

  

  return (
    <>
      <h1>ToDo List</h1>
      <div>
        <input ref={editRef} type="text" />
        <button onClick={() => onClickButton(editRef, setMonitor)}>Add ToDo</button>
        <ul>
        <List monitor={(monitor)} />
      </ul>
      
      </div>
      
    </>
  );
}

export default App;
