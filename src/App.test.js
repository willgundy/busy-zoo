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
});
