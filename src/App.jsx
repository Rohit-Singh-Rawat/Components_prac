import { useState } from 'react'
import Document from './Components/Insert-text-in-document/Document'
import CheckboxesCard from './Components/Select All Checkboxes/CheckboxesCard'
import Page from './Components/useOutsideClick Custom Hook/Page'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page></Page>
    </>
  )
}

export default App
