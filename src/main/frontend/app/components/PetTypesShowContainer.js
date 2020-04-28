import React, {useState, useEffect} from 'react';
import PetTypesShow from "./PetTypesShow"

const PetTypesShowContainer = (props) => {
  const [petTypes, setPetTypes] = useState([])

  useEffect(() => {
    fetch(`/api/v1/pet_types`)
    .then(response => {
      if (response.ok) {
        return response
      } else{
        let errorMessage = `${response.status} (${response.statusText})`, 
          error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(body => {
      setPetTypes(body)
    })
    .catch(error => {
      error => console.error(`Error in fetch: ${error.message}`)
    })
  }, [])

  const listPetTypes = petTypes.map((petType) => {
    return(
      <PetTypesShow
        key={petType.id}
        petType={petType}
      />
    )
  })

  return(
    <div>
      {listPetTypes}
    </div>
  )

  
}

export default PetTypesShowContainer