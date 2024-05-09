import { useState ,useReducer} from 'react'
import './App.css'
import Button from "./component/Button"
import Operation from './component/Operation'
import ClearDel from './component/ClearDel'


const initialState ={
    firstNumber:"" ,
    secondNumber:"",
    result:"",
    operation:""
}

export const ACTION ={
    CLEARDEL :"clearDelete",
    ADDDIGIT:"adddigit",
    OPERATION:"operation"
}


function reducer(state,{type,payload}){
     switch(type){
        case ACTION.CLEARDEL:
          if(payload=="AC"){
            return {...state,
              firstNumber:"",
              secondNumber:"",
              result:"",
              operation:""
             }
           }
           else if(payload=="DEL"){
             if(state.secondNumber){
              let delSecondNumber=state.secondNumber.split("").splice(0,state.secondNumber.length-1).join("")
              return {...state,
                secondNumber:delSecondNumber
               }
             }
             else if(state.operation){
              return {...state,
                  operation:""
               }
             }
             else{
              let delFirstNumber=state.firstNumber.split("").splice(0,state.firstNumber.length-1).join("")
              return {...state,
                firstNumber:delFirstNumber,
               }
             }

            
           }
          
        case ACTION.ADDDIGIT:
           if(state.operation==""){
              return {...state,
                  firstNumber:state.firstNumber+payload
              }
           }
           else{
            return {...state,
              secondNumber:state.secondNumber+payload
          }
           }

        case ACTION.OPERATION:
          if(!state.operation && state.firstNumber){
            return {
              ...state,
              operation:payload
            }
          }
          else if(state.operation && state.secondNumber){

             let result =null
             let a = parseFloat(state.firstNumber)
             let b= parseFloat(state.secondNumber)
            if(state.operation=="+"){
               result= a+b
            }
            else if(state.operation=="-"){
              result= a-b
            }
            else if(state.operation=="*"){
              result= a*b
            }
            else if(state.operation=="/"){
              result= a/b
            }

            if(payload=="="){
              return {
                ...state,
                result:result,
                operation:"",
                firstNumber:result.toString(),
                secondNumber:""
              }
            }
            else{

              return {
                ...state,
                result: result,
                operation:payload,
                firstNumber:result.toString(),
                secondNumber:""
              }

            }

          }
        
        default:
          return state
     }
}



function App() {

  let [state,dispatch] = useReducer(reducer,initialState)
  console.log(state)
  console.log(state.operation)
  return (
    <div>
        <div className='calculator'>
         <Button text={state.firstNumber}/>
         <Button text={state.operation}/>
         <Button text={state.secondNumber}/>

         <ClearDel text={"AC"}   dispatch={dispatch}/>
         <ClearDel text={"DEL"}  dispatch={dispatch}/>
         <Operation text={"+"} dispatch={dispatch}/>

         <Button    text={"1"} dispatch={dispatch}/>
         <Button    text={"2"} dispatch={dispatch}/>
         <Button    text={"3"} dispatch={dispatch}/>
         <Operation text={"-"} dispatch={dispatch}/>
         <Button    text={"4"} dispatch={dispatch}/>
         <Button    text={"5"} dispatch={dispatch}/>
         <Button    text={"6"} dispatch={dispatch}/>
         <Operation text={"*"} dispatch={dispatch}/>
         <Button    text={"7"} dispatch={dispatch}/>
         <Button    text={"8"} dispatch={dispatch}/>
         <Button    text={"9"} dispatch={dispatch}/>
         <Operation text={"/"} dispatch={dispatch}/>
         <Button    text={"."} dispatch={dispatch}/>
         <Button    text={"0"} dispatch={dispatch}/>
         <Operation text={"="} dispatch={dispatch}/>

    </div>
    </div>
    
  )
}

export default App
