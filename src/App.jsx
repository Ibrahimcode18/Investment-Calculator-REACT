import { useState } from 'react'
import Header from './components/Header'
import Userinput from './components/Userinput'
import Table from './components/Table'
import './App.css'

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment : 2000,
        annualInvestment : 500,
        expectedReturn : 10,
        duration : 5
    })
    const inputValidity = userInput.duration >= 1

    function handleUserInput(inputIdentifier, newValue){
        setUserInput((prevUserInput) => {
            return{
                ...prevUserInput,
                [inputIdentifier] : +newValue
            }
        })
    } 

  return (
    <>
      <Header />
      <Userinput onChange={handleUserInput} inputByUser={userInput}/>
      {inputValidity ? <Table input={userInput} /> : <p className='center'>Please Input a duration greater than zero</p>}
    </>
  )
}

export default App
