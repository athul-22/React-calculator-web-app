import logo from './logo.svg';
import './App.css';
import './styles.css';
import  {Component} from "react";
import { useReducer } from 'react';
import DigitBtn from './DigitButton';
import OperationBtn from './OperationButton';
import ToggleBtn from './DarkMode/ToggleBtn';

export const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CHOOSE_OPERATION : 'choose-operation',
  CLEAR : 'clear',
  DELETE_DIGIT : 'delete-digit',
  EVALUATE : 'evaluate'
}

function reducer(state,{type , payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT: 
    if(payload.digit === "0" && state.currentOperand === "0") {return state}
    if(payload.digit === "." && state.currentOperand.includes(".")){
      return state
    }
      return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }

      case ACTIONS.CHOOSE_OPERATION:
        if(state.currentOperand == null && state.previousOperand == null  ){
          return state
        }
      
      if(state.currentOperand == null)  {
        return{
          ...state,
          operation: payload.operation,
        }
      }

      if(state.previousOperand == null){
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand:null
         }
      }

      return { 
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }

      case ACTIONS.CLEAR:
        return{}

      case ACTIONS.EVALUATE:
        if(state.operation ==null || state.currentOperand ==null || state.previousOperand==null){
          return state
        }

        return {
          ...state,
          previousOperand:null,
          operation:null,
          currentOperand: evaluate(state),
        }
      }
     } 

function evaluate({currentOperand,previousOperand,operation}){

  const prev = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  
  if(isNaN(prev)|| isNaN(current)) return ""
  
  let computation = ""
  
  switch(operation){
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "/":
      computation = prev / current
      break
    case "*":
      computation = prev * current
      break
       
  }
  return computation.toString()
}



function App() {


// MAIN CALCULATION FUNCTION  
const [{currentOperand, previousOperand, operation},dispatch] = useReducer(reducer,{})


  return (
   <div className="main">
    <ToggleBtn/>
    <div className="cal-grid">
      <div className="main">
      <div className='output'>
        <div className='previous-operand'>{previousOperand} {operation}</div>
        <div className='current-operand'>{currentOperand}</div>
      </div>
      <button className='span-2' onClick={() => dispatch({type:ACTIONS.CLEAR}) }>AC</button>
      <button className='del' onClick={() => dispatch({type:ACTIONS.CLEAR})}>DEL</button>
      
      <OperationBtn operation="/" dispatch={dispatch} />
        
      <DigitBtn digit="1" dispatch={dispatch} />
      <DigitBtn digit="2" dispatch={dispatch} />
      <DigitBtn digit="3" dispatch={dispatch} />
      <OperationBtn operation="*" dispatch={dispatch} />
        
      <DigitBtn digit="4" dispatch={dispatch} />
      <DigitBtn digit="5" dispatch={dispatch} />
      <DigitBtn digit="6" dispatch={dispatch} />
      <OperationBtn operation="+" dispatch={dispatch} />
      <DigitBtn digit="7" dispatch={dispatch} />
      <DigitBtn digit="8" dispatch={dispatch} />
      <DigitBtn digit="9" dispatch={dispatch} />
      <OperationBtn operation="-" dispatch={dispatch} />
      <DigitBtn digit="." dispatch={dispatch} />
      <DigitBtn digit="0" dispatch={dispatch} />
      <button className="span-2 main-btn" onClick={() => dispatch({type:ACTIONS.EVALUATE})}>=</button>
      </div>
    </div>
    </div>
  )
}

export default App;
