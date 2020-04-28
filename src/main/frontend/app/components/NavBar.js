import React from 'react'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import PetTypesShowContainer from "./PetTypesShowContainer"
import AdoptablePetsShowContainer from "./AdoptablePetsShowContainer"
import IndividualPetShowContainer from "./IndividualPetShowContainer"

const NavBar = (props) => {
  return(
    <BrowserRouter>
      <div className="wrapper-topbar">
        <div className="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="large">
          <button className="menu-icon" type="button" data-toggle="responsive-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar">
          <div className="row">
            <div className="small-12 columns">
              <div className="top-bar-left">
                <Link to="/pets">Pets</Link>
                <li><Link to="/pets/dog">Dogs</Link></li>
                <li><Link to="/pets/cat">Cats</Link></li>
              </div>

            
              <div className="top-bar-right" id="responsive-menu">
              <ul className="dropdown menu" data-dropdown-menu>
                  <li><Link to="/pets">Home</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/pets" component={PetTypesShowContainer} />
        <Route exact path="/pets/:type" component={AdoptablePetsShowContainer} />
        <Route exact path="/pets/:animalType/:id" component={IndividualPetShowContainer}/>
        
      </Switch>
     
    </BrowserRouter>
  )
}

export default NavBar