import { fireEvent, render } from '@testing-library/react';
import { InputCheckbox } from './InputCheckbox';

describe('InputCheckbox', () => {
  test('Sets check value correctly', () => {
    const { getByTestId } = render(<InputCheckbox checked={false} onChange={() => {}} label='Test' id='test' />);
    expect(getByTestId('input-checkbox')).not.toBeChecked();
  });

  test('Changes value correctly', () => {
    const onChange = jest.fn();
    const { getByTestId, rerender } = render(
      <InputCheckbox checked={false} onChange={onChange} label='Test' id='test' />
    );
    fireEvent.click(getByTestId('input-checkbox-label'));
    expect(onChange).toHaveBeenCalled();
    rerender(<InputCheckbox checked={true} onChange={onChange} label='Test' id='test' />);
    expect(getByTestId('input-checkbox')).toBeChecked();
  });
});
