import React from 'react'
import Graphs from '../Graphs/Graphs'
import { Route, Switch } from 'react-router-dom'

export default function index() {
  return (
    <Switch>
      <Route key="/" exact path="/" component={Graphs} />,
    </Switch>
  )
}
