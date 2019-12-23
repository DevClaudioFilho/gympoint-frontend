import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';

import CreateStudent from '../pages/CreateStudent';
import StudentList from '../pages/StudentList';
import EditStudent from '../pages/EditStudent';

import PlansList from '../pages/Plans';
import PlansCreate from '../pages/CreatePlan';
import EditPlans from '../pages/EditPlans';



export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/students/:id" component={EditStudent} isPrivate />
      <Route path="/studentslist" component={StudentList} isPrivate />
      <Route path="/students" component={CreateStudent} isPrivate />

      <Route path="/planslist" component={PlansList} isPrivate />
      <Route path="/plans/:id" component={EditPlans} isPrivate />
      <Route path="/createplans" component={PlansCreate} isPrivate />
     
    </Switch>
  );
}
