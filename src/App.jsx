import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 10,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} input={userInput} />
      {inputIsValid ? (
        <Table input={userInput} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
