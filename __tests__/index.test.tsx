import { render, screen } from '@testing-library/react';
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
