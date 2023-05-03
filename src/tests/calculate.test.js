import calculate from '../logic/calculate';

describe('calculate', () => {
  test('calculate', () => {
    const obj = {
      total: 3,
      next: 4,
      operation: '+',
    };
    const obj2 = {
      total: null,
      next: null,
      operation: null,
    };
    const answer = calculate(obj, 'AC');
    expect(JSON.stringify(answer)).toEqual(JSON.stringify(obj2));
    expect(calculate({ next: '5' }, 'AC')).toHaveProperty('total', null);
  });
});
