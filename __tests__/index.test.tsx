import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '@/pages/index';

describe('rendering', () => {
  it('renders an input', () => {
    render(<Calculator />);
    const input = screen.getByLabelText('Enter number here:');

    expect(input).toBeInTheDocument();
  });

  it('renders an output', () => {
    render(<Calculator />);
    const output = screen.getByLabelText('Roman number:');

    expect(output).toBeInTheDocument();
  });
});

describe('when user enters', () => {
  it.each([
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [9, 'IX'],
    [10, 'X'],
    [11, 'XI'],
    [12, 'XII'],
    [13, 'XIII'],
    [14, 'XIV'],
    [15, 'XV'],
    [20, 'XX'],
    [30, 'XXX'],
    [40, 'XL'],
    [41, 'XLI'],
    [48, 'XLVIII'],
    [49, 'XLIX'],
    [50, 'L'],
    [60, 'LX'],
    [70, 'LXX'],
    [80, 'LXXX'],
    [90, 'XC'],
    [100, 'C'],
    [101, 'CI'],
    [111, 'CXI'],
    [200, 'CC'],
    [249, 'CCXLIX'],
    [300, 'CCC'],
    [400, 'CD'],
  ])('%s, then %s is displayed', (integer, roman) => {
    render(<Calculator />);

    const input = screen.getByLabelText('Enter number here:');

    fireEvent.change(input, { target: { value: integer } });

    const output = screen.getByLabelText('Roman number:');
    expect(output).toHaveValue(roman)
  });
});
