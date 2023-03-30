import operate from '../logic/operate';

describe('Test the operate component', () => {
  test('+ operator', () => {
    expect(operate('2', '1', '+')).toBe('3');
  });
  test('- operator', () => {
    expect(operate('6', '1', '-')).toBe('5');
  });
  test('x operator', () => {
    expect(operate('6', '6', 'x')).toBe('36');
  });
  test('÷ operator', () => {
    expect(operate('60', '6', '÷')).toBe('10');
  });
  test('÷ operator when divided by 0', () => {
    expect(operate('2', '0', '÷')).toBe("Can't divide by 0.");
  });
});
