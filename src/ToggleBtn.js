import React from 'react'
import './styles.css';
import { WiDaySunny } from "react-icons/wi";
import { BsMoon } from "react-icons/bs";


function ToggleBtn() {
  return (
    <div>
        <button className='day'><WiDaySunny/></button>
        <button className='night'><BsMoon/></button>
    </div>
  )
}

export default ToggleBtn