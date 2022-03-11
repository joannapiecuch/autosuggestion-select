import { fireEvent, render } from '@testing-library/react';
import { ResultsList } from './ResultsList';

const mockData = [{ name: 'TestName1' }, { name: 'TestName2' }, { name: 'TestName3' }];

describe('ResultList', () => {
  test('Calls onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<ResultsList onChange={onChange} data={mockData} />);
    const checkbox = container.querySelector('#TestName1');

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(['TestName1']);

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith([]);
  });

  test('Resets value', () => {
    const onChange = jest.fn();
    const { container, getByTestId } = render(<ResultsList onChange={onChange} data={mockData} />);
    const checkbox = container.querySelector('#TestName1');
    const button = getByTestId('reset-button');

    fireEvent.click(checkbox);
    fireEvent.click(button);
    expect(onChange).toHaveBeenCalledWith([]);
  });
});
