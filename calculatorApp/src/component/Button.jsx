import React from 'react'
import { ACTION } from '../App'

function button({dispatch,text}) {
  return (
     <button onClick={()=>dispatch({type:ACTION.ADDDIGIT,payload:text})}>
      {text}
     </button>
  )
}

export default button