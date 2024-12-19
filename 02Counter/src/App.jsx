import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] = useState(15)


  // let Counter = 15;

  const addValue = () => {
    setCounter(counter + 1)

  }
  const removeValue = () => {
    if(counter <= 0) return;  // if counter is less than or equal to 0, return without decrementing.
    setCounter(counter - 1)
  }


  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter} </h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
