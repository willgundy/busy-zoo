import React from 'react';
import CustomButton from './CustomButton';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <div className='openSignContainer'>
      <span>{isOpen ? 'Busy Zoo is Open!' : 'Sorry We are Closed!'}</span>
      <CustomButton className='openButton' disabled={isOpen} onClick={() => setIsOpen(true)}>Open The Zoo!</CustomButton>
      <CustomButton className='closeButton' disabled={!isOpen} onClick={() => setIsOpen(false)}>Close the Zoo!</CustomButton>
    </div>
  );
}
