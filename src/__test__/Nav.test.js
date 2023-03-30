import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

it('renders correctly', () => {
  const navbar = render(<BrowserRouter><Nav /></BrowserRouter>);
  expect(navbar).toMatchSnapshot();
});
