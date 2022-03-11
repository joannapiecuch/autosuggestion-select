import { fireEvent, render, screen } from '@testing-library/react';
import { AutosuggestionSelect } from './index';

const mockData = [{ name: 'Foo' }];

jest.mock('./hooks/use-university-data', () => ({
  useUniversityData(searchText) {
    const universitiesData = mockData.filter(({ name }) => name.toLowerCase().includes(searchText.toLowerCase()));
    return { universitiesData, clearResults: jest.fn(), error: undefined };
  }
}));

describe('AutosuggestionSelect', () => {
  test('Calls onChange', () => {
    const onChange = jest.fn();
    const { container, getByTestId } = render(<AutosuggestionSelect onChange={onChange} />);

    fireEvent.change(getByTestId('input-field'), { target: { value: 'foo' } });

    const checkbox = container.querySelector('#Foo');
    fireEvent.click(checkbox);

    expect(onChange).toHaveBeenCalledWith(['Foo']);
  });

  test('Shows counter', () => {
    const onChange = jest.fn();
    const { container, getByText, getByTestId } = render(<AutosuggestionSelect onChange={onChange} />);

    fireEvent.change(getByTestId('input-field'), { target: { value: 'foo' } });

    const checkbox = container.querySelector('#Foo');
    fireEvent.click(checkbox);

    const counter = getByText('1');
    expect(counter).toBeTruthy();
  });
});
