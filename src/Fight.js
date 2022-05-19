import React from 'react';

export default function Fight({ animalOneSize, setAnimalOneSize, animalTwoSize, setAnimalTwoSize }) {
  return (
    <div className='fightContainer'>
      <div className='animalOne'>
        <img src='bugs.png' style={{ width: animalOneSize }}/>
        {animalOneSize < 20 ?
          <button variant='info' onClick={() => setAnimalOneSize(animalOneSize + 1)}>Bugs Eats Some Carrot</button>
          :
          <button variant='info' disabled>No More Carrots</button>
        }
        {animalTwoSize > 5 ?
          <button variant='warning' onClick={() => setAnimalTwoSize(animalTwoSize - 1)}>Duck Season!</button>
          :
          <button variant='warning' disabled>Lightin Up on Daffy</button>
        }
      </div>
      <div className='animalTwo'>
        <img src='daffy.png' style={{ width: animalTwoSize }}/>
        {animalTwoSize < 20 ?
          <button variant='info' onClick={() => setAnimalTwoSize(animalTwoSize + 1)}>Daffy Gains Fame</button>
          :
          <button variant='info' disabled>No More Carrots</button>
        }
        {animalOneSize > 5 ?
          <button variant='warning' onClick={() => setAnimalOneSize(animalOneSize - 1)}>Rabbit Season!</button>
          :
          <button variant='warning' disabled>Lightin Up on Bugs</button>
        }
      </div>
    </div>
  );
}
