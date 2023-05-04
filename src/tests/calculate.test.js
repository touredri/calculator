// import { object } from 'prop-types';
import calculate from '../logic/calculate';
// import operate from '../operate';

describe('calculate', () => {
  it('should reset calculator when buttonName is AC', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should reset calculator when "AC" button is clicked', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should append numbers to "next" when a number button is clicked', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: 10,
      next: '52',
      operation: '+',
    });
  });

  it('should return an empty object when "0" button is clicked and "next" is "0"', () => {
    const result = calculate({ total: 10, next: '0', operation: '+' }, '0');
    expect(result).toEqual({});
  });

  it('should update "next" when there is an operation and a number button is clicked', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: 10,
      next: '52',
      operation: '+',
    });
  });

  it('should update "next" and clear the value when there is no operation and a number button is clicked', () => {
    const result = calculate({ total: 10, next: '5', operation: null }, '2');
    expect(result).toEqual({
      total: null,
      next: '52',
      operation: null,
    });
  });

  it('should add decimal point to "next" when "." button is clicked', () => {
    const result = calculate({ total: 10, next: '5', operation: null }, '.');
    expect(result).toEqual({
      total: null,
      next: '5.',
      operation: null,
    });
  });

  it('should not add decimal point to "next" if it already has one', () => {
    const result = calculate({ total: 10, next: '5.5', operation: null }, '.');
    expect(result).toEqual({
      total: 10,
      next: '5.5',
      operation: null,
    });
  });

  it('should add decimal point to "total" when "." button is clicked and "total" is a number', () => {
    const result = calculate({ total: 10, next: null, operation: null }, '.');
    expect(result).toEqual({
      total: '10.',
      next: null,
      operation: null,
    });
  });

  it('should not add decimal point to "total" if it already has one', () => {
    const result = calculate(
      { total: '10.', next: null, operation: null },
      '.',
    );
    expect(result).toEqual({
      total: '10.',
      next: null,
      operation: null,
    });
  });

  it('should calculate result when "=" button is clicked', () => {
    const result = calculate({ total: 10, next: '5', operation: '+' }, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('should handle the equal sign', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };

    let result = calculate(obj, '=');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: null,
    });

    result = calculate(result, '+');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '+',
    });

    result = calculate(result, '4');
    expect(result).toEqual({
      total: '12',
      next: null,
      operation: '+',
    });
  });

  it('should change sign of next or total when +/- is pressed', () => {
    let obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    let result = calculate(obj, '+/-');
    expect(result).toEqual({
      total: '-5',
      next: '-3',
      operation: '+',
    });

    obj = {
      total: '-5',
      next: null,
      operation: null,
    };
    result = calculate(obj, '+/-');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('should handle operation buttons when there is no next', () => {
    const obj = {
      total: '5',
      next: null,
      operation: '+',
    };

    let result = calculate(obj, '-');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '-',
    });

    result = calculate(result, '*');
    expect(result).toEqual({
      total: '5',
      next: null,
      operation: '*',
    });
  });

  it('should handle operation buttons after equal sign', () => {
    let obj = {
      total: '5',
      next: '3',
      operation: '-',
    };
    let result = calculate(obj, '=');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: null,
    });

    result = calculate(result, '+');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: '+',
    });

    result = calculate(result, '4');
    expect(result).toEqual({
      total: '6',
      next: null,
      operation: '+',
    });

    obj = {
      total: '5',
      next: '3',
      operation: '-',
    };
    result = calculate(obj, '=');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: null,
    });

    result = calculate(result, '*');
    expect(result).toEqual({
      total: '2',
      next: null,
      operation: '*',
    });

    result = calculate(result, '4');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '*',
    });
  });

  it('should handle operation buttons when there is an existing operation and a next', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };

    let result = calculate(obj, '-');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '-',
    });

    result = calculate(result, '*');
    expect(result).toEqual({
      total: '-3',
      next: null,
      operation: '*',
    });

    result = calculate(result, '2');
    expect(result).toEqual({
      total: '-6',
      next: null,
      operation: '*',
    });
  });

  it('should handle operation buttons when there is no existing operation and a next', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: null,
    };

    let result = calculate(obj, '+');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '+',
    });

    result = calculate(result, '-');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '-',
    });

    result = calculate(result, '/');
    expect(result).toEqual({
      total: '8',
      next: null,
      operation: '/',
    });
  });
});
