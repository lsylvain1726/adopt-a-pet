import React from 'react'
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import PetTypesShowContainer from "./PetTypesShowContainer"
import AdoptablePetsShowContainer from "./AdoptablePetsShowContainer"
import IndividualPetShowContainer from "./IndividualPetShowContainer"
import AddAPetContainer from "./AddAPetContainer"

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
                <Link to="/pets"><img src="http://localhost:8080/image/fluffy-logo.png" alt="Fluffy Meets Cuddles Logo"/></Link>
              </div>

            
              <div className="top-bar-right" id="responsive-menu">
              <ul className="dropdown menu" data-dropdown-menu>
                  <li><Link to="/pets">Home</Link></li>
                  <li><Link to="/pets/dog">Dogs</Link></li>
                  <li><Link to="/pets/cat">Cats</Link></li>
                  <li><a href="/adoptions/new">Surrender Application</a></li>
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
        <Route exact path="/adoptions/new" component={AddAPetContainer} />
        
      </Switch>
     
    </BrowserRouter>
  )
}

export default NavBar