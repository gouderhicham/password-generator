import "./App.css";
import Form from "./components/Form";
import { formPassword, CopyText } from "../src/function.js";
import { useState } from "react";
function App() {
  const [input, setInput] = useState(10);
  // define vars to see if boxes are checked or not !
  const [inputCheck, setInputChecked] = useState({
    upperChecked: false,
    numbersChecked: false,
    symChecked: false,
  });
  // if box 1 checked add upper chars and if box2 ...etc and return the last array of chars index at the end
  let charCodesIndex = formPassword(
    inputCheck.upperChecked,
    inputCheck.numbersChecked,
    inputCheck.symChecked
  );
  //loop as mush as input value and pick random indexes from the previus array and add them as chars letters by String.fromCharsCode function
  const getFinalPass = () => {
    let list = [];
    for (let i = 0; i < input; i++) {
      let random =
        charCodesIndex[Math.floor(Math.random() * charCodesIndex.length)];
      list.push(String.fromCharCode(random));
    }
    setPass(list.join(""));
  };
  // passwprd that we are gonna display
  const [password, setPass] = useState("password");
  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      <h3 onClick={CopyText} className="password-display" id="passwordDisplay">
        {password}
      </h3>
      <Form
        input={input}
        setInputChecked={setInputChecked}
        inputCheck={inputCheck}
        setInput={setInput}
        getFinalPass={getFinalPass}
      />
    </div>
  );
}
export default App;
