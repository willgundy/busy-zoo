import React from 'react';
import CustomButton from './CustomButton';

export default function Fight({ animalOneSize, setAnimalOneSize, animalTwoSize, setAnimalTwoSize }) {
  return (
    <div className='fightContainer'>
      <div className='fightCard'>
        <h2>Bugs</h2>
        <img src='bugsBunny.png' height={animalOneSize * 10}/>
        {animalOneSize < 20 ?
          <CustomButton variant='info' onClick={() => setAnimalOneSize(animalOneSize + 1)}>Bugs Eats Some Carrot</CustomButton>
          :
          <CustomButton variant='info' disabled>No More Carrots</CustomButton>
        }
        {animalTwoSize > 5 ?
          <CustomButton variant='warning' onClick={() => setAnimalTwoSize(animalTwoSize - 1)}>Duck Season!</CustomButton>
          :
          <CustomButton variant='warning' disabled>Lightin Up on Daffy</CustomButton>
        }
      </div>
      <h2>VS</h2>
      <div className='fightCard'>
        <h2>Daffy</h2>
        <img src='daffyDuck.png' height={animalTwoSize * 10 }/>
        {animalTwoSize < 20 ?
          <CustomButton variant='info' onClick={() => setAnimalTwoSize(animalTwoSize + 1)}>Daffy Gains Fame</CustomButton>
          :
          <CustomButton variant='info' disabled>{`Can't Get More Famous!`}</CustomButton>
        }
        {animalOneSize > 5 ?
          <CustomButton variant='warning' onClick={() => setAnimalOneSize(animalOneSize - 1)}>Rabbit Season!</CustomButton>
          :
          <CustomButton variant='warning' disabled>Lightin Up on Bugs</CustomButton>
        }
      </div>
    </div>
  );
}
