import { ACTIONS } from "./App"
import React from "react"
import './styles.css';


export default function OperationButton({ dispatch, operation}) {
    return <button style={{color:'white',backgroundColor:'#fe9505'}} onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload : { operation } })}> {operation} </button>
}