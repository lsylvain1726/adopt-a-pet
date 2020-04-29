import React from "react"
import { Link } from "react-router-dom"

const AdoptablePetsShow = (props) => {
  const pet = props.pet
  return(
    <div className="small-12 medium-4 columns">
      <div className="card-pet">
        <div className="card-pet-header">
            <Link to={`/pets/${pet.petType.type}/${pet.id}`}><img src={pet.imgUrl} /></Link>
        </div>
        <div className="card-pet-body">
          <h2>{pet.name}</h2>
          <ul className="list-pettype-info">
            <li>Age: {pet.age}</li>
            <li>{props.vaccinationStatus}</li>
          </ul>
        </div>
        <div className="card-pet-footer">
            <Link to={`/pets/${pet.petType.type}/${pet.id}`} className="button button-pettype-name">Meet {pet.name}</Link>
        </div>
      </div>
    </div>
  )
}

export default AdoptablePetsShow