import React from 'react';
import AnimalEmoji from './AnimalEmoji';

export default function Parade({ animals, setAnimals }) {

  function addToAnimalParade(animalType) {
    animals.push(animalType);
    setAnimals([...animals]);
  }

  return (
    <div className='paradeContainer'>
      <h2>Add to the Animal Parade</h2>
      <div className='parade-buttons'>
        <button onClick={() => addToAnimalParade('elephant')}>Add Elephant 🐘</button>
        <button onClick={() => addToAnimalParade('tiger')}>Add Tiger 🐅</button>
        <button onClick={() => addToAnimalParade('giraffe')}>Add Giraffe 🦒</button>
        <button onClick={() => addToAnimalParade('rhino')}>Add Rhino 🦏</button>
        <button onClick={() => addToAnimalParade('gorilla')}>Add Gorilla 🦍</button>
      </div>
      <div className='flex-row'>
        {animals.map((animal, i) => <AnimalEmoji key={i} animal={animal}/>)}
      </div>
    </div>
  );
}
