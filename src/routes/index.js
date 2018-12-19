import React from "react"
import { Switch, Route } from "react-router-dom"
import App from "../App";
import ChristmasCard from "../components/ChristmasCard"




export default <Switch>
  <Route exact path="/" component={App} />
  <Route exact path="/anna" component={ChristmasCard} />
</Switch>