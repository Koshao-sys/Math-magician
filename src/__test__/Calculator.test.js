import { render } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
});