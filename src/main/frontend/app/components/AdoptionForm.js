import React, {useState} from "react"
import _ from 'lodash'

const AdoptionForm = (props) => {



  const homeOptions = ["Own", "Rent Managed"]
  const homeStatusOptions = [""].concat(homeOptions).map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    )
  })

  let clickedClass
  if (props.showForm === true) {
    clickedClass = "show"
  } else {
    clickedClass = "hide"
  }


  return (
    <div className="wrapper-form">
      
      <div className={`adoption-form row ${clickedClass}`}>
        <hr />
        <h2>Adoption Form</h2>
        <form>
          <div className="small-12 medium-6 columns">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" name="phoneNumber" id="phoneNumber" />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="small-12 medium-6 columns">
            <label htmlFor="homeStatus">Home Status</label>
            <select name="homeStatus" id="homeStatus">
                  {homeStatusOptions}
            </select>
          </div>
          <div className="small-12 columns">
            <input type="submit" className="button button-submit" value="Adopt Me Please!" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdoptionForm