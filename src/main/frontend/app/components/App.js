import React, {Fragment} from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./NavBar"

const App = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
      <Footer />
    </Fragment>
  )
}

export default App