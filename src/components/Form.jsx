function Form({ input,getFinalPass, setInput, inputCheck, setInputChecked }) {
  //excute this function when submit btn is clicked
  const handleSubmit = (e) => {
    e.preventDefault();
    getFinalPass()
  };
  // update the input value the same as the range input 
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  // set each box checked value the same as the  taget.checked var   
  const handleCheck = (e) => {
    let target = e.target.id;
    let checked = e.target.checked;
    switch (target) {
      case "includeUppercase":
        setInputChecked({ ...inputCheck, upperChecked: checked });
        break;
      case "includeNumbers": 
        setInputChecked({ ...inputCheck, numbersChecked: checked });
        break;
      case "includeSymbols":
        setInputChecked({ ...inputCheck, symChecked: checked });
        break;
    }
  };
  return (
    <form id="passwordGeneratorForm" className="form" onSubmit={handleSubmit}>
      <label htmlFor="characterAmountNumber">Number Of Characters</label>
      <div className="character-amount-container">
        <input
          onInput={handleChange}
          type="range"
          min={0}
          max={50}
          value={input}
          id="characterAmountRange"
        />
        <input
          className="number-input"
          type="number"
          min={0}
          max={50}
          value={input}
          id="characterAmountNumber"
          onChange={handleChange}
        />
      </div>

      <label htmlFor="includeUppercase">Include Uppercase</label>
      <input onChange={handleCheck} type="checkbox" id="includeUppercase" />

      <label htmlFor="includeNumbers">Include Numbers</label>
      <input onChange={handleCheck} type="checkbox" id="includeNumbers" />

      <label htmlFor="includeSymbols">Include Symbols</label>
      <input onChange={handleCheck} type="checkbox" id="includeSymbols" />

      <button type="submit" className="btn">
        Generate Password
      </button>
    </form>
  );
}
export default Form;
