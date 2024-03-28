import { useState } from 'react'
import Document from './Components/Insert-text-in-document/Document'
import CheckboxesCard from './Components/Select All Checkboxes/CheckboxesCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CheckboxesCard></CheckboxesCard>
    </>
  )
}

export default App
