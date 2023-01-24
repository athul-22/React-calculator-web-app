import logo from './logo.svg';
import './App.css';
import './styles.css';
import DigitBtn from "./DigitBtn";
import  {Component} from "react";





function App() {

 

  return (
    <div className="cal-grid">
      <div className="main">
      <div className='output'>
        <div className='previous-operand'>1233</div>
        <div className='current-operand'>1222</div>
      </div>
      <button className='span-2'>AC</button>
      <button className='del'>DEL</button>
      <DigitBtn digit="/" />
      <button>2</button> 
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-2 main-btn">=</button>
      </div>
    </div>
  )
}

export default App;
