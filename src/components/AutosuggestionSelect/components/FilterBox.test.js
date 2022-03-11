import { fireEvent, render } from '@testing-library/react';
import { FilterBox } from './FilterBox';

describe('FilterBox', () => {
  test('Opens dropdown', () => {
    let open = false;
    const setOpen = jest.fn();

    const { getByTestId } = render(<FilterBox name='' setOpen={setOpen} open={open} counter={0} children={null} />);

    fireEvent.click(getByTestId('filter-button'));
    expect(setOpen).toHaveBeenCalled();
  });
});
