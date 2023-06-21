
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./Child1";
import ChildComponent2 from "./Child2";

const App = () => {
  const [optionName, setOptionName] = useState('')
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 setOptionName={setOptionName}/>
        <ChildComponent2 setOptionName={setOptionName}/>
        <p>Selected Option: {optionName}</p>
    </div>
  )
}

export default App
