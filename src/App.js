import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Rooms from './pages/rooms/rooms.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/Rooms' component={Rooms} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
        
      </div>
    );
  
  }
}

export default App;
