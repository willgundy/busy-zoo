import React from 'react';
import AnimalEmoji from './AnimalEmoji';
import CustomButton from './CustomButton';

export default function Parade({ animals, setAnimals }) {

  function addToAnimalParade(animalType) {
    animals.push(animalType);
    setAnimals([...animals]);
  }

  return (
    <div className='paradeContainer'>
      <h2>Add to the Animal Parade</h2>
      <div className='parade-buttons'>
        <CustomButton onClick={() => addToAnimalParade('elephant')}>Add Elephant</CustomButton>
        <CustomButton onClick={() => addToAnimalParade('tiger')}>Add Tiger</CustomButton>
        <CustomButton onClick={() => addToAnimalParade('giraffe')}>Add Giraffe</CustomButton>
        <CustomButton onClick={() => addToAnimalParade('rhino')}>Add Rhino</CustomButton>
        <CustomButton onClick={() => addToAnimalParade('gorilla')}>Add Gorilla</CustomButton>
      </div>
      <div className='flex-row'>
        {animals.map((animal, i) => <AnimalEmoji key={i} animal={animal}/>)}
      </div>
    </div>
  );
}
