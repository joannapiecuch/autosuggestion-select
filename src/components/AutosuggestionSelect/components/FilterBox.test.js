import { fireEvent, render } from '@testing-library/react';
import { FilterBox } from './FilterBox';

describe('FilterBox', () => {
  test('Opens dropdown', () => {
    let open = false;
    const toggle = jest.fn();

    const { getByTestId } = render(<FilterBox name='' toggle={toggle} open={open} counter={0} children={null} />);

    fireEvent.click(getByTestId('filter-button'));
    expect(toggle).toHaveBeenCalled();
  });
});
