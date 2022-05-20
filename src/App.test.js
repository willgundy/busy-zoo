import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('when open button is click text changes to Busy Zoo is Open, when close button is clicked text changes to Sorry we are Closed', () => {
  render(<App />);
  const zooClosedButton = screen.queryByText(/Close the Zoo!/i);
  const zooOpenButton = screen.queryByText(/Open the Zoo!/i);

  fireEvent.click(zooOpenButton);

  const zooOpenEl = screen.queryByText('Busy Zoo is Open!');
  expect(zooOpenEl).toBeInTheDocument();

  fireEvent.click(zooClosedButton);

  const zooClosedEl = screen.queryByText('Sorry We are Closed!');
  expect(zooClosedEl).toBeInTheDocument();
});

test('make sure each button in the parade section renders the correct animal emoji', () => {
  render(<App />);
  //elephant count, which should start at one and go to two after click event
  const elephantCountBefore = screen.queryAllByText(/🐘/i);
  expect(elephantCountBefore.length).toBe(1);
  const elephantButton = screen.getByText(/Add Elephant/i);
  fireEvent.click(elephantButton);
  const elephantCountAfter = screen.queryAllByText(/🐘/i);
  expect(elephantCountAfter.length).toBe(2);

  //tiger count, which should start at one and go to two after click event
  const tigerCountBefore = screen.queryAllByText(/🐅/i);
  expect(tigerCountBefore.length).toBe(1);
  const tigerButton = screen.getByText(/Add Tiger/i);
  fireEvent.click(tigerButton);
  const tigerCountAfter = screen.queryAllByText(/🐅/i);
  expect(tigerCountAfter.length).toBe(2);

  //giraffe count, which should start at zero and go to one after click event
  const giraffeCountBefore = screen.queryAllByText(/🦒/i);
  expect(giraffeCountBefore.length).toBe(0);
  const giraffeButton = screen.getByText(/Add Giraffe/i);
  fireEvent.click(giraffeButton);
  const giraffeCountAfter = screen.queryAllByText(/🦒/i);
  expect(giraffeCountAfter.length).toBe(1);

  //rhino count, which should start at one and go to two after click event
  const rhineBeforecount = screen.queryAllByText(/🦏/i);
  expect(rhineBeforecount.length).toBe(1);
  const rhinoButton = screen.getByText(/Add Rhino/i);
  fireEvent.click(rhinoButton);
  const rhinoCountAfter = screen.queryAllByText(/🦏/i);
  expect(rhinoCountAfter.length).toBe(2);

  //gorilla count, which should start at zero and go to one after click event
  const gorillaCountBefore = screen.queryAllByText(/🦍/i);
  expect(gorillaCountBefore.length).toBe(0);
  const gorillaButton = screen.getByText(/Add Gorilla/i);
  fireEvent.click(gorillaButton);
  const gorillaCountAfter = screen.queryAllByText(/🦍/i);
  expect(gorillaCountAfter.length).toBe(1);
});
