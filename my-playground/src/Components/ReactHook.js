import { useReducer } from "react"
import styled from 'styled-components'

const Button = styled.button`
    width: 50vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: teal;
`

const reducer = (count,action) => {
  switch(action.type){
    case 'increment':
      return count + 1;
    case 'decrement':
      return count - 1;
    default:
      return 0;
  }
}

function ReactHook() {
  const[count,dispatch] = useReducer(reducer,0);

  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => dispatch({type: 'reset'})}>Reset</Button>
      <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
      <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
    </>
  )
}

export default ReactHook