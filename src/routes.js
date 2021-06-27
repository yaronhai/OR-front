import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Rooms from './pages/rooms/rooms.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Rooms' component={Rooms} />
        <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
)

export default Routes;