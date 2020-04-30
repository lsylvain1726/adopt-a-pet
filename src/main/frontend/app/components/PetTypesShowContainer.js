import React, {useState, useEffect, Fragment} from 'react';
import PetTypesShow from "./PetTypesShow"
import HeroHeader from "./HeroHeader"

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

    let petImage 
    if (petType.type === "dog") {
      petImage = "http://localhost:8080/image/doogle-home.jpg"
    } else {
      petImage ="http://localhost:8080/image/kitten-home.jpg" 
    }

    return(
      <PetTypesShow
        petImage={petImage}
        key={petType.id}
        petType={petType}
      />
    )
  })

  return(
    <Fragment>
      <HeroHeader />
      <div className="wrapper-animal">
        <div className="row">
          <div className="small-12 columns">
            <h2 className="wrapper-animal-title">Our Adoptable Pets</h2>
          </div>
          {listPetTypes}
        </div>
      </div>
    </Fragment>
  )

  
}

export default PetTypesShowContainer