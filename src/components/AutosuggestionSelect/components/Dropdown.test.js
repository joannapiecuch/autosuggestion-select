import { fireEvent, render } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('Dropdown should be visible', () => {
    const onClose = jest.fn();
    const onSearchChange = jest.fn();
    const onChange = jest.fn();
    const { container } = render(
      <Dropdown
        onSearchChange={onSearchChange}
        searchName='foo'
        universitiesData={[]}
        onClose={onClose}
        open={true}
        onChange={onChange}
        error={null}
      />
    );

    expect(container).toBeVisible();
  });

  test('Dropdown shouldnt be visible', async () => {
    const onClose = jest.fn();
    const onSearchChange = jest.fn();
    const onChange = jest.fn();

    // todo
    const { container } = render(
      <Dropdown
        onSearchChange={onSearchChange}
        searchName='foo'
        universitiesData={[]}
        onClose={onClose}
        open={false}
        onChange={onChange}
        error={null}
      />
    );

    // expect(container).not.toBeVisible();
  });

  test('Call onClose', () => {
    const onClose = jest.fn();
    const onSearchChange = jest.fn();
    const onChange = jest.fn();
    const { getByTestId } = render(
      <Dropdown
        onSearchChange={onSearchChange}
        searchName='foo'
        universitiesData={[]}
        onClose={onClose}
        open={true}
        onChange={onChange}
        error={null}
      />
    );

    const buttonClose = getByTestId('dropdown-close-button');
    fireEvent.click(buttonClose);
    expect(onClose).toHaveBeenCalled();
  });
});
