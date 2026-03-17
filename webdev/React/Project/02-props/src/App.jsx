import { useState } from 'react'
import Card1 from './Components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Card1 username='Ayush Card' btnText='Get Started' />
    <hr />
    <br />
    <Card1 username='Piyush Card' btnText='Visit Profile' />
    </>
  )
}

export default App
