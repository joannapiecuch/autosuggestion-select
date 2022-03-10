import { fireEvent, render } from '@testing-library/react';
import { FilterBox } from './components';
import { AutosuggestionSelect } from './index';

describe('AutosuggestionSelect', () => {
  test('Sets search name value correctly', () => {
    const setSearchName = jest.fn();
    const { container } = render(<AutosuggestionSelect />);
    const input = container.querySelector('input');

    fireEvent.change(input, { value: 'bar' });
    expect(setSearchName).toHaveBeenCalled();
  });

  test('Opens dropdown', () => {
    const setOpen = jest.fn();
    const { container, rerender } = render(<FilterBox name='Foo' open={false} setOpen={setOpen} counter={0} />);
    const element = container.querySelector('.filter-box');
    element.click();
    expect(setOpen).toHaveBeenCalled();
    rerender(<FilterBox name='Foo' open={true} setOpen={setOpen} counter={0} />);
    const elementOpen = container.querySelector('.filter-box--open');
    expect(elementOpen).toBeTruthy();
  });
});
