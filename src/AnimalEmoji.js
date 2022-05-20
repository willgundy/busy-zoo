import React from 'react';

export default function AnimalEmoji({ animal }) {
  return (
    <div className='animal'>
      {animal === 'elephant' && <span>🐘</span>}
      {animal === 'tiger' && <span>🐅</span>}
      {animal === 'giraffe' && <span>🦒</span>}
      {animal === 'rhino' && <span>🦏</span>}
      {animal === 'gorilla' && <span>🦍</span>}
    </div>
  );
}
