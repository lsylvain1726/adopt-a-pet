import React, {useState, useEffect, Fragment} from 'react'
import AdoptablePetsShow from "./AdoptablePetsShow"
import NotFound from "./NotFound"

const AdoptablePetsShowContainer = (props) => {

  const [adoptablePets, setAdoptablePets] = useState([])
  const [notFound, setNotFound] = useState(false)
  const petType = props.match.params.type

  useEffect(() => {
    fetch(`/api/v1/adoptable_pets/${petType}`)
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
      setAdoptablePets(body)
    })
    .catch(error => {
      setNotFound(true)
      error => console.error(`Error in fetch: ${error.message}`)
    })
  }, [petType])

  const listAdoptablePets = adoptablePets.map((pet) => {
    let vaccinationStatus = ""
    if (pet.vaccinationStatus === true) {
      vaccinationStatus = "Vaccinated"
    } else {
      vaccinationStatus = "Not vaccinated"
    }

    return(
      <AdoptablePetsShow
        key={pet.id}
        pet={pet}
        vaccinationStatus={vaccinationStatus}
      />
    )
  })

  let imageClassHeader = ""
  if (petType === "dog") {
    imageClassHeader = "dog"
  } else if (petType === "cat") {
    imageClassHeader = "cat"
  } else {
    imageClassHeader = ""
  }

  if(notFound === false) {
    return (
      <Fragment>
        <div className={`wrapper-interior-header wrapper-${imageClassHeader}`}>
          <div className="row">
            <div className="small-12 columns">
              <h1 className="pet-header-title">Meet Our {petType}s</h1>
            </div>
          </div>
          </div>
          <div className="wrapper-pettypes">
            <div className="row">
            {listAdoptablePets}
            </div>
          </div>
      </Fragment>
    )
  } else {
    return(
      <NotFound />
    )
  }
}

export default AdoptablePetsShowContainer