import { useEffect, useState } from "react"

export default function Clicker({keyName, color, increment}){

    const [ count, setCount ] = useState(parseInt(localStorage.getItem(keyName) ?? 0))

    // récupère les informations de Localstorage
    useEffect(() =>{
        return () =>{
        localStorage.removeItem(keyName)
        }
    }, [])

    // stock les infos dans Localstorage
    useEffect(() =>{
        localStorage.setItem(keyName, count)
    }, [count])

    const buttonClick = () =>
    {
        setCount(count + 1)
        increment()
    }

    return <div>
        <div style={{color}}>Clicks count: {count}</div>
        <button onClick={ buttonClick }>Click me</button>
    </div>

}
