import React from 'react'
import { useState  } from 'react';
import './darkmodestyles.css';
import { WiDaySunny } from "react-icons/wi";
import { BsMoon } from "react-icons/bs";

const DarkMode = ()=>{
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "darkTheme";
  let theme;
}


function ToggleBtn() {
  return (
    <div className='toggle-btns'>
        <center><button className='day'><WiDaySunny/></button> &nbsp&nbsp
        <button className='night'><BsMoon/></button></center>
    </div>
  )
}

export default ToggleBtn