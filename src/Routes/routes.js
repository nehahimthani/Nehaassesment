import React from 'react'
import { Switch, Route } from 'react-router-dom'
import home from './../home'
import AnimalSection from './../animalSection'
import VegetableSection from './../vegetableSection'
const Routes = () => (
  <Switch>
     <Route exact path='/' component={home}/>
     <Route exact path='/animalSection' component={AnimalSection}/>
     <Route exact path='/vegetableSection' component={VegetableSection}/>
  </Switch>
)
export default Routes;
