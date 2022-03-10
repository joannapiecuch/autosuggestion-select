import { fireEvent, render } from '@testing-library/react';
import { InputCheckbox } from './InputCheckbox';

describe('InputCheckbox', () => {
  test('Sets check value correctly', () => {
    const component = render(<InputCheckbox checked={false} onChange={() => {}} label='Test' id='test' />);
    const checkbox = component.container.querySelector('input');

    expect(checkbox).not.toBeChecked();
  });

  test('Changes value correctly', () => {
    const onChange = jest.fn();
    const component = render(<InputCheckbox checked={false} onChange={onChange} label='Test' id='test' />);
    const label = component.container.querySelector('label');
    const checkbox = component.container.querySelector('input');
    fireEvent.click(label);
    expect(onChange).toHaveBeenCalled();
    component.rerender(<InputCheckbox checked={true} onChange={onChange} label='Test' id='test' />);
    expect(checkbox).toBeChecked();
  });
});
