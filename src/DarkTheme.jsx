import { useState } from "react";
import './style.css'

export default function DarkTheme(){

    



    const [darkMode, whiteMode] = useState(true)
    

    function blackTheme(){
        var switchDarkMode = document.documentElement;
        switchDarkMode.classList.toggle('dark');
        whiteMode(!darkMode)
    }

    return <>
    <button className="rounded-full bg-black px-2 text-sm" onClick={blackTheme}>{darkMode ? 'day' : 'night'}</button>

    </>
}