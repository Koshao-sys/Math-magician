import { render } from '@testing-library/react';
import Home from '../components/Home';

it('renders correctly', () => {
  const home = render(<Home />);
  expect(home).toMatchSnapshot();
});
