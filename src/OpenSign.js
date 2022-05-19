import React from 'react';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <div className='openSignContainer'>
      <span>{isOpen ? 'Busy Zoo is Open!' : 'Sorry We are Closed!'}</span>
      <button className='openButton' disabled={isOpen} onClick={() => setIsOpen(true)}>Open The Zoo!</button>
      <button className='closeButton' disabled={!isOpen} onClick={() => setIsOpen(false)}>Close the Zoo!</button>
    </div>
  );
}
