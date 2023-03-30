import { render, act } from '@testing-library/react';
import Quotes from '../components/Quotes';

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponse(JSON.stringify([{ quote: 'The race is not for the fast nor the swift', category: 'Inspiration', author: 'Koshao Godfrey' }]));
});

it('The Quotes component renders correctly with the passed quote', async () => {
  const quotes = await act(async () => render(<Quotes />));

  expect(quotes).toMatchSnapshot();
});
