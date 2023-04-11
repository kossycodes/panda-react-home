import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Form from "./components/Form"
import Model from "./components/Model"
import { useState } from "react"



function App() {
  const [showModel, setShowModel] = useState(false)
  const updatedValue = (newShowModel) => {
    setShowModel(newShowModel)
  }
  const handleOnClose = () => updatedValue(false)


  return (
    <div  >
      <Navbar />
      <Main />
      <Form updatedValue={updatedValue} showModel={showModel} />
      <Model onClose={handleOnClose} visible={ showModel } />
    </div>
  )
}

export default App
