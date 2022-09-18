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
  it('1, then "I" is displayed', () => {
    render(<Calculator />);

    const input = screen.getByLabelText('Enter number here:');

    fireEvent.change(input, { target: { value: 1 } });

    const output = screen.getByLabelText('Roman number:');
    expect(output).toHaveValue('I')
  });

  it('3, then "III" is displayed', () => {
    render(<Calculator />);

    const input = screen.getByLabelText('Enter number here:');

    fireEvent.change(input, { target: { value: 3 } });

    const output = screen.getByLabelText('Roman number:');
    expect(output).toHaveValue('III')
  });
});
