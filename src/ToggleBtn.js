import React from 'react'
import { useState  } from 'react';
import './styles.css';
import { WiDaySunny } from "react-icons/wi";
import { BsMoon } from "react-icons/bs";


const LightTheme = () => {

    const [style, setStyle] = useState("cont");

    let elem = document.getElementsByClassName('cal-grid');
    console.log("YOU JUST CLICKED")
    setStyle("cont2");

}

function ToggleBtn() {
  return (
    <div>
        <button onClick={LightTheme} className='day'><WiDaySunny/></button>
        <button className='night'><BsMoon/></button>
    </div>
  )
}

export default ToggleBtn