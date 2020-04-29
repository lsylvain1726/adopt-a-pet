import React, { useState } from "react"
import AddAPetForm from "./AddAPetForm"

const AddAPetContainer = props => {
  const [pet, setPet] = useState([])
  const [showForm, setShowForm] = useState(true)

  const addNewForm = formPayload => {
    fetch(`/api/v1/surrender_pets`, {
      method: "POST",
      body: JSON.stringify(pet),
      headers: { "Content-Type": "application/json" }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
        throw error
      }
    })
    .then(response => {
      return response.json()
    }).then(json => {
      setPet([
        ...pet,
        json
      ])
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <AddAPetForm 
      addNewForm={addNewForm} 
      setShowForm={setShowForm}
      showForm={showForm}
    />
  )
}

export default AddAPetContainer