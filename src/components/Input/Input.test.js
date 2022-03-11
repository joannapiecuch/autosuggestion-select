import { fireEvent, render } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  test('Sets value correctly', () => {
    const { getByTestId } = render(<Input value='foo' onChange={() => {}} placeholder='Test' />);
    const input = getByTestId('input-field');

    expect(input.value).toBe('foo');
  });

  test('Changes value correctly', () => {
    let value = 'foo';
    const onChange = jest.fn().mockImplementation(({ target: { value: newValue } }) => {
      value = newValue;
    });

    const { rerender, getByTestId } = render(<Input value={value} onChange={onChange} placeholder='Test' />);
    const input = getByTestId('input-field');
    fireEvent.change(input, { target: { value: 'bar' } });

    expect(onChange).toHaveBeenCalled();
    rerender(<Input value={value} onChange={onChange} placeholder='Test' />);
    expect(input.value).toBe('bar');
  });
});
