import Clicker from "./Clicker"
import { useState } from "react"
import LottieAnimation from "./lottieAnimation"


export default function App({children}){

  const [darkMode, whiteMode] = useState(true)
  
  function blackTheme(){
      var switchDarkMode = document.documentElement;
      switchDarkMode.classList.toggle('dark');
      whiteMode(!darkMode)
  }
  
  const [hasClicker, setHasClicker] = useState(true)
  const [count, setCount] = useState(0)
  const toggleClickerClick = () =>{
      setHasClicker(!hasClicker)
  }
  const increment = () =>{
      setCount(count + 1)
  }



  return <>
  <LottieAnimation className='display: block ml-auto my-0 mr-0 ' />
  <h1 className="w-fit text-2xl font-bold display: block; mx-auto px-4 py-2 rounded-md" >Mes notes pour React</h1>
  {children}
  <button onClick={toggleClickerClick}>{hasClicker ? 'hide' : 'show'} clicker</button>
  {hasClicker && <>
  <div>Total count: {count}</div>
  <Clicker increment={increment} keyName="countA" color={`hsl(${Math.random() * 360 }deg, 100%, 70%)`} />
  <Clicker increment={increment} keyName="countB" color={`hsl(${Math.random() * 360 }deg, 100%, 70%)`} />
  <Clicker increment={increment} keyName="countC" color={`hsl(${Math.random() * 360 }deg, 100%, 70%)`} />
  </>}
  </>
  
}