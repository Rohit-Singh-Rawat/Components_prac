import { useState } from 'react'
import Document from './Components/Insert-text-in-document/Document'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Document></Document>
    </>
  )
}

export default App
