//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  //const [count, setCount] = useState(0)
  // let myObj = {
  //   username: 'Raj',
  //   age: 28,
  // }


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-500 text-white p-4 rounded-xl">
        Hello world!
      </h1>
      <Card username="RSP" btnText="CLick Me" />
      <Card username="RP" btnText="Sell"/>
    </>
  )
}

export default App
