import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setcounter]=useState(0)

  // let counter=0

  const addvalue=()=>{
    // counter+=1;
    setcounter(counter+1)
    console.log(counter);
  }
  const removevalue=()=>{
    counter-=1;
    console.log(counter);
  }
  return (
    <>
    <h1>Welcome to the buttons</h1>
    <p>{counter}</p>
    <button onClick={addvalue}>add the value {counter}</button>
    <br/>
    <button onClick={removevalue}>remove value {counter}</button>

    <footer>{counter}</footer>
    </>
  )
}

export default App
