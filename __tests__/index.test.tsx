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
    [7, 'VII']
  ])('%s, then %s is displayed', (integer, roman) => {
    render(<Calculator />);

    const input = screen.getByLabelText('Enter number here:');

    fireEvent.change(input, { target: { value: integer } });

    const output = screen.getByLabelText('Roman number:');
    expect(output).toHaveValue(roman)
  });
});
