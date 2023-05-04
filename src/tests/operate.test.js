import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });

  it('subtracts two numbers correctly', () => {
    expect(operate(5, 3, '-')).toEqual('2');
  });

  it('multiplies two numbers correctly', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });

  it('divides two numbers correctly when second number is not zero', () => {
    expect(operate(6, 3, '÷')).toEqual('2');
  });

  it("returns 'Can't divide by 0.' when dividing by zero", () => {
    expect(operate(6, 0, '÷')).toEqual("Can't divide by 0.");
  });

  it('finds modulo of two numbers correctly when second number is not zero', () => {
    expect(operate(8, 3, '%')).toEqual('2');
  });

  it("returns 'Can't find modulo as can't divide by 0.' when dividing by zero", () => {
    expect(operate(8, 0, '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for unknown operations', () => {
    expect(() => operate(5, 2, '^')).toThrow("Unknown operation '^'");
  });
});
