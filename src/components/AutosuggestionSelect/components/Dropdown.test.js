import { fireEvent, render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('Dropdown should be visible', () => {
    const setOpen = jest.fn();
    const onChange = jest.fn();
    const { container } = render(<Dropdown setOpen={setOpen} open={true} onChange={onChange} />);

    expect(container).toBeVisible();
  });

  test('Calls setOpen on close', () => {
    const setOpen = jest.fn();
    const onChange = jest.fn();
    const { getByTestId } = render(<Dropdown setOpen={setOpen} open={true} onChange={onChange} />);

    const buttonClose = getByTestId('dropdown-close-button');
    fireEvent.click(buttonClose);
    expect(setOpen).toHaveBeenCalledWith(false);
  });
});
