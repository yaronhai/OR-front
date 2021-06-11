import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Rooms from './pages/rooms/rooms.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/Rooms' component={Rooms} />
      </Switch>
      
    </div>
  );
}

export default App;
