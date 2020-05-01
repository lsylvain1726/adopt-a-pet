import React, {useState} from 'react'
import AdoptionForm from "./AdoptionForm"

const AdoptionFormContainer = (props) => {

  const addNewPet = formPayload => {
    fetch(`/api/v1/adoption_applications`, {
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

  return(

    <AddAPetForm 
      addNewPet={addNewPet} 
    />
  )
}

export default AdoptionFormContainer