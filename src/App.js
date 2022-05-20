import { useState } from 'react';
import { Route, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Fight from './Fight';
import OpenSign from './OpenSign';
import Parade from './Parade';
import AdminPage from './AdminPage';

function App() {
  const [animalOneSize, setAnimalOneSize] = useState(10);
  const [animalTwoSize, setAnimalTwoSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [animals, setAnimals] = useState(['elephant', 'tiger', 'rhino']);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Welcome to Busy Zoo!
          <NavLink className={'navHeader'} to={'/'}>Home</NavLink>
          <NavLink className={'navHeader'} to={'/admin'}>Admin</NavLink>
        </header>
        <Switch>
          <Route exact path={'/'}>
            <main>
              <Fight 
                animalOneSize={animalOneSize}
                animalTwoSize={animalTwoSize}
                setAnimalOneSize={setAnimalOneSize}
                setAnimalTwoSize={setAnimalTwoSize}
              />
              <OpenSign 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
              <Parade 
                animals={animals}
                setAnimals={setAnimals}
              />
            </main>
          </Route>
          <Route exact path={'/admin'}>
            <AdminPage />
          </Route>  
        </Switch>
      </div>
    </Router>

  );
}

export default App;
