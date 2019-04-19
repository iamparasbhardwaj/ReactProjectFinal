// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Symptoms from './containers/Symptoms';
import Symptom from './containers/Symptom';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Symptoms} />
     <Route path="/:id" component={Symptom} />
  </Route>
)
