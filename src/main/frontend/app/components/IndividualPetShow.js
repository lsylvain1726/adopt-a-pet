import React from "react"
import { Link } from "react-router-dom"

const IndividualPetShow = (props) => {
  let pet = props.pet

  let vaccinated = ""

  if ( pet.vaccinationStatus === true) {
    vaccinated = "Vaccinated"
  } else {
    vaccinated = "Not Vaccinated"
  }

  return(
    <div className="row">
      <div className="columns small-12">
        <div className="card-pet-info">
          <ul className="list-pet-info">
            <li><img src={pet.imgUrl} alt={pet.name}/></li>
            <li><span className="pet-info-title">Name:</span> {pet.name}</li>
            <li><span className="pet-info-title">Age:</span>  {pet.age}</li>
            <li><span className="pet-info-title">Vaccination Status:</span>  {vaccinated}</li>
            <li><span className="pet-info-title span-block">Adoption Story:</span>{pet.adoptionStory}</li>
          </ul>
          <div onClick={props.adoptMeClicked} className="button-wrapper">
            <Link className={`button`} onClick={props.showForm} to="#">Adopt Me!</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualPetShow