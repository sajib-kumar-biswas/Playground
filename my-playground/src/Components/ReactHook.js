import { useState } from "react"
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

function ReactHook() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <Button onClick={() => setCount(0)}>Reset</Button>
      <Button onClick={() => setCount((prevCount) => { return prevCount - 1 })}>-</Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
    </>
  )
}

export default ReactHook