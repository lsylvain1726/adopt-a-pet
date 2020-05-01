import React, {useState, useEffect, Fragment} from "react"
import ErrorList from "./ErrorList"
import _ from 'lodash'

const AddAPetForm = (props) => {

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

  const defaultForm =  {
    name: "",
    phoneNumber: "",
    email: "",
    petName: "",
    petAge: "",
    petTypeId: "",
    petImageUrl: "",
    vaccinationStatus: "",
    applicationStatus: ""
  }

  const [newPet, setNewPet] = useState(defaultForm)
  const [errors, setErrors] = useState({})
  
  let typeId
  if (newPet.petTypeId === "1") {
    typeId = 1
  } else {
    typeId = 2
  }

  let petType = petTypes.find(pet => pet.id === typeId)

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "phoneNumber", "email","petName", "petAge", "petTypeId", "petImageUrl", "vaccinationStatus"]
    requiredFields.forEach((field) => {
      if (newPet[field].trim() === "" || newPet[field] === null) {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })
  
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleChange = event => {
    setNewPet({
      ...newPet,
      [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const handleSubmit = event => {

    event.preventDefault()
    const isVaccinated = (newPet.vaccinationStatus === "true")

    let formPayload = {
      name: newPet.name,
      phoneNumber: newPet.phoneNumber,
      email: newPet.email,
      petName: newPet.petName,
      petAge: newPet.petAge,
      petType: petType,
      petImageUrl: newPet.petImageUrl,
      vaccinationStatus: newPet.vaccinationStatus, 
      applicationStatus: "pending"
    }
   
    if (validForSubmission()) {
      props.addNewForm(formPayload)
      setNewPet(defaultForm)
    }
  }

  let showHideForm
  if (props.showForm === true) {
    showHideForm = "show"
  } else {
    showHideForm = "hide"
  }

  let hideMessage
  if(props.message) {
    hideMessage = "show"
  } else {
    hideMessage = "hide"
  }


  return(
    <Fragment>

      <div className={`wrapper-interior-header wrapper-interior-animal`}>
        <div className="row">
          <div className="small-12 columns">
            <h1 className="pet-header-title">Surrender Your Pet</h1>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="small-12 columns">
          <div className="surrender-pet-info">
            <p>We understand how difficult a decision this must be to surrender your pet. We will do everything in our power to find a new family with a great home for your pet. In the meantime, they will be in the care of our staff and we will treat them as if they are a part of our family.</p>
          </div>
        </div>
      </div>

      <hr />

      <div className={hideMessage}>
        <div className="row">
          <div className="small-12 columns">
            <div className="form-submission-message">
              {props.message}
            </div>
          </div>
        </div>
      </div>

      <div className={`add-a-pet-form row ${showHideForm}`}>
        <div className="small-12 columns">
        <form onSubmit={handleSubmit}>
          <ErrorList errors={errors} />
          <div className="row">
            <div className="small-12 medium-6 columns">
              <label htmlFor="name">Name</label>
              <input name="name" id="name" type="text" onChange={handleChange} value={newPet.name} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input name="phoneNumber" id="phoneNumber" type="text" onChange={handleChange} value={newPet.phoneNumber} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="email">E-mail</label>
              <input name="email" id="email" type="text" onChange={handleChange} value={newPet.email} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="petName">Pet Name</label>
              <input name="petName" id="petName" type="text" onChange={handleChange} value={newPet.petName} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="petAge">Pet Age</label>
              <input name="petAge" id="petAge" type="number" onChange={handleChange} value={newPet.petAge} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="petTypeId">Pet Type</label>
              <select name="petTypeId" id="petTypeId" onChange={handleChange} value={newPet.petTypeId}>
                <option value="-">-</option>
                <option value="1">Dog</option>
                <option value="2">Cat</option>
              </select>
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="petImageUrl">Pet Image</label>
              <input name="petImageUrl" id="petImageUrl" type="text" onChange={handleChange} value={newPet.petImageUrl} />
            </div>
            <div className="small-12 medium-6 columns">
              <label htmlFor="vaccinationStatus">Vaccination Status</label>
              <select name="vaccinationStatus" id="vaccinationStatus" onChange={handleChange} value={newPet.vaccinationStatus}>
                <option value="-">-</option>
                <option value="true">Vaccinated</option>
                <option value="false">Not vaccinated</option>
              </select>
            </div>
            <div className="small-12 columns">
              <input name="button" type="submit" className="button" />
            </div>
          </div>
        </form>
        </div>
      </div>
    </Fragment>   
  )
}

export default AddAPetForm

