import { useState } from 'react';
import './App.css';
import Fight from './Fight';
import OpenSign from './OpenSign';
import Parade from './Parade';

function App() {
  const [animalOneSize, setAnimalOneSize] = useState(10);
  const [animalTwoSize, setAnimalTwoSize] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  const [animals, setAnimals] = useState(['elephant', 'tiger', 'rhino']);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Busy Zoo!
      </header>
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
    </div>
  );
}

export default App;
