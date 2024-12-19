import { useState } from 'react'
import './App.css'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    usernames: "hitesh",
    age:21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    <Card username="chai aur code" designation="Fullstack Dev, Eqaim Tech"/>
    <Card username="shailesh choudhary" designation="Software Tester, Eqaim Technology"/>
    </>
  )
}

export default App
