import React, { useState } from "react"
import AddAPetForm from "./AddAPetForm"

const AddAPetContainer = props => {
  const [showForm, setShowForm] = useState(true)
  const [message, setMessage] = useState("")

  const addNewForm = formPayload => {
    fetch(`/api/v1/surrender_pets`, {
      method: "POST",
      body: JSON.stringify(formPayload),
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
      response.json()
      setShowForm(false)
      setMessage("Thank you for your form submission. Your surrender request is in process and someone from our team will reach out to you shortly")
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }

  return (
    <AddAPetForm 
      addNewForm={addNewForm} 
      setShowForm={setShowForm}
      showForm={showForm}
      message={message}
    />
  )
}

export default AddAPetContainer