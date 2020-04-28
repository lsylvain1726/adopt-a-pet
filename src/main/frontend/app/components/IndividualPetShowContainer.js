import React, {useState, useEffect, Fragment} from 'react'
import { Redirect } from "react-router-dom"
import IndividualPetShow from "./IndividualPetShow"

const IndividualPetShowContainer = (props) => {

  const [individualPet, setIndividualPet] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const petId = props.match.params.id
  const animalType = props.match.params.animalType

  useEffect(() => {
    fetch(`/api/v1/adoptable_pets/${animalType}/${petId}`)
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
      setIndividualPet(body)
    })
    .catch(error => {
      setShouldRedirect(true)
    })
  }, {})

  if(shouldRedirect) {
    return <Redirect to="/pets" />
  }

  return(
    <div>
      <Fragment>
        <div className={`wrapper-interior-header wrapper-interior-animal`}>
          <div className="row">
            <div className="small-12 columns">
              <h1 className="pet-header-title">Meet {individualPet.name}</h1>
            </div>
          </div>
        </div>
        <div className="wrapper-individual-pet">
          <IndividualPetShow
            pet={individualPet}
          />
        </div>
    </Fragment>
    </div>
  )
}

export default IndividualPetShowContainer