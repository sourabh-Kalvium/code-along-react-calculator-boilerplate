import React from 'react'
import { ACTION } from '../App'

function Operation({dispatch,text}) {
  return (
      <button onClick={()=>dispatch({type:ACTION.OPERATION,payload:text})}>
        {text}
      </button>
  )
}

export default Operation