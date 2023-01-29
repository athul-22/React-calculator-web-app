import React from 'react'
import { useState  } from 'react';
import './darkmodestyles.css';
import { WiDaySunny } from "react-icons/wi";
import { BsMoon } from "react-icons/bs";

const DarkMode = ()=>{
  let clickedClass = "clicked";
  const body = document.body;
  const main = document.getElementsByClassName("main");
  const lightTheme = "light";
  const darkTheme = "darkTheme";
  let theme;
}

if(localStorage){
  theme = localStorage.getItem("theme")
}

if(theme === lightTheme || theme === darkTheme){
  body.classList.add(theme);
}
else{
  body.classList.add(theme);
}



function ToggleBtn() {
  return (
    <div className='toggle-btns'>
        <button 
          className={theme === "dark" ? clickedClass : ""}
          id="darkMode"
          onClick={(e)=> switchTheme(e)}
          >SWITCH</button>
        <center><button className='day'><WiDaySunny/></button> &nbsp&nbsp
        <button className='night'><BsMoon/></button></center>
    </div>
  )
}

export default ToggleBtn