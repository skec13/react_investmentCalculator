import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  //check if valid data
  const inputIsValid = userInput.duration >= 1;

  // setting state of an object based on previous state
  function handleChange(inputIdentifier, newValue){
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,   //+ because inputs return strings and we need numbers
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput}/>
      {!inputIsValid && <p>Please enter a valid duration.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
