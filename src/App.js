import logo from './logo.svg';
import './App.css';
import './styles.css';
import DigitBtn from "./DigitBtn";
import  {Component} from "react";
import { useReducer } from 'react';

const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'
}


function reducer(state,{type , payload}){
  switch(type) {
    
  }
}


function App() {

const [{currentOperand, previousOperand, operation},dispatch] = useReducer(reducer)


  return (
    <div className="cal-grid">
      <div className="main">
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
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
