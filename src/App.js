import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Rooms from './pages/rooms/rooms.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Rooms' component={Rooms} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
}

export default App;
