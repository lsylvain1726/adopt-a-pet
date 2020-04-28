import React, {Fragment} from 'react'
import NavBar from "./NavBar"
import { Route, Switch, BrowserRouter } from "react-router-dom"

const App = (props) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Route path="/" component={NavBar} />
      </BrowserRouter>
    </Fragment>
  )
}

export default App