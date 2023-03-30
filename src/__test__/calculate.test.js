import calculate from '../logic/calculate';

const calcFunc = {
  total: null,
  next: null,
  operation: null,
};

it('Test Math Operatons', () => {
  const btnClick = (btnSubtract) => {
    const { total = null, next = null, operation = null } = calculate(calcFunc, btnSubtract);
    calcFunc.total = total;
    calcFunc.next = next;
    calcFunc.operation = operation;
  };
  btnClick('4');
  btnClick('-');
  btnClick('2');
  btnClick('=');
  expect(calcFunc.total).toBe('2');
  expect(calcFunc.next).toBe(null);
  expect(calcFunc.operation).toBe(null);
});
