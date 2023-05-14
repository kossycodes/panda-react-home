import React from "react"
import Navbar from "../components/Navbar"
import Hint from "../components/Hint"
import Form from "../components/Form"
import Model from "../components/Model"
import { useState } from "react"



export default function Home() {

    const [showModel, setShowModel] = useState(false)
  const updatedValue = (newShowModel) => {
    setShowModel(newShowModel)
  }
  const handleOnClose = () => updatedValue(false)


    
    return (
        <div  >
           <Navbar />
           <Hint />
           <Form updatedValue={updatedValue} showModel={showModel}   />
           <Model onClose={handleOnClose} visible={ showModel }  />
        </div>
    )
}