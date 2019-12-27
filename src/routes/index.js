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

import RegistrationList from '../pages/RegistrationsList';
import CreateRegistration from '../pages/CreateRegistration';
import EditRegistrations from '../pages/EditRegistrations';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Route path="/students/:id" component={EditStudent} isPrivate />
      <Route path="/studentslist" component={StudentList} isPrivate />
      <Route path="/students" component={CreateStudent} isPrivate />

      <Route path="/planslist" component={PlansList} isPrivate />
      <Route path="/plans/:id" component={EditPlans} isPrivate exact/>
      <Route path="/createplans" component={PlansCreate} isPrivate exact/>

      
      <Route path="/registrationslist" component={RegistrationList} isPrivate exact/>
      <Route path="/registrations/:id" component={EditRegistrations} isPrivate exact/>
      <Route path="/createregistrations" component={CreateRegistration} isPrivate exact/>
     
    </Switch>
  );
}
