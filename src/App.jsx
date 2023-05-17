import { useState } from 'react'

import './App.css'
import Result from './components/Result'
import Summary from './components/Summary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Result/>
        <Summary/>
      </main>
    </>
  )
}

export default App
