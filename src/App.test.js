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
