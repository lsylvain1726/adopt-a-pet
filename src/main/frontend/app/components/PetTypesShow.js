import React from 'react'
import { Link } from "react-router-dom"

const PetTypesShow = (props) => {
  let petType = props.petType
  return(
  <div className="small-12 medium-6 columns">
    <div className="card-animal">
      <div className="card-animal-body">
        {/* <Link to={`/pets/${petType.type}`}>
            <img src={props.petImage} alt={petType.type} /> 
        </Link> */}
        <Link className="button button-card-animal" to={`/pets/${petType.type}`}>
            <span className="card-animal-title">Meet Our <span className="capitalize">{petType.type}s</span></span>   
            <span className="card-animal-subtitle">{petType.description}</span>
        </Link>
        <span className="card-animal-title">Meet Our <span className="capitalize">{petType.type}s</span></span>   
        <span className="card-animal-subtitle">{petType.description}</span>
      </div>
    </div>
  </div>  
  )
}

export default PetTypesShow