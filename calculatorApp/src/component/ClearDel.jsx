import React from 'react'
import { ACTION } from '../App'

function ClearDel({dispatch,text}) {
  return (
     <button onClick={()=>dispatch({type:ACTION.CLEARDEL,payload:text})}>{text}</button>
  )
}

export default ClearDel