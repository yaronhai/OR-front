import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Rooms from './pages/rooms/rooms.component';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route path='/Rooms' component={Rooms} />
    </div>
  );
}

export default App;
