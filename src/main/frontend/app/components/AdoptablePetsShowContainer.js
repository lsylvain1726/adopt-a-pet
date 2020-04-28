import React, {useState, useEffect, Fragment} from 'react'
import AdoptablePetsShow from "./AdoptablePetsShow"

const AdoptablePetsShowContainer = (props) => {

  const [adoptablePets, setAdoptablePets] = useState([])
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
      error => console.error(`Error in fetch: ${error.message}`)
    })
  }, [])

  const listAdoptablePets = adoptablePets.map((pet) => {
    return(
      <AdoptablePetsShow
        key={pet.id}
        pet={pet}
      />
    )
  })
  return(
    <Fragment>
      <div className="row">
        <div className="small-12 columns">
          <h1 className="pet-header-title">Meet Our {petType}s</h1>
        </div>
      </div>
      <div className="wrapper-pettypes">
        <div className="row">
        {listAdoptablePets}
        </div>
      </div>
    </Fragment>
  )
}

export default AdoptablePetsShowContainer