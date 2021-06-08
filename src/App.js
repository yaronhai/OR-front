import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import PersonCard from './components/person-card.component';

function App() {
  return (
    <div className="App">
      <HomePage />
      <PersonCard />
    </div>
  );
}

export default App;
