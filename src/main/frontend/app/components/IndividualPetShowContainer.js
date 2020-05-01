import React, {useState, useEffect, Fragment} from 'react'
import IndividualPetShow from "./IndividualPetShow"
import AdoptionForm from "./AdoptionForm"
import NotFound from "./NotFound"

const IndividualPetShowContainer = (props) => {

  const [individualPet, setIndividualPet] = useState({})
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [showForm, setShowForm] = useState(false)

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
      setNotFound(true)
    })
  }, {})

  let adoptMeClicked = () => {
    setShowForm(true)
  }

  if(notFound === false) {
    return(
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
              adoptMeClicked={adoptMeClicked}
            />
            <AdoptionForm 
              setShowForm={setShowForm}
              showForm={showForm}
            />
          </div>
      </Fragment>
    )
  } else {
    return (
      <NotFound />
    )
  }

}

export default IndividualPetShowContainer