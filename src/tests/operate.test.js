import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  it('multiple two numbers', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
});