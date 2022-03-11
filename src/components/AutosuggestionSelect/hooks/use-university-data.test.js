import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import { useUniversityData } from './use-university-data';

const mockResponse = [
  {
    name: 'Test'
  }
];

describe('useUniversityData', () => {
  test('Should return results', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const { result, rerender, waitForNextUpdate } = renderHook((initialValue) => useUniversityData(initialValue), {
      initialProps: ''
    });

    rerender('Test');

    await waitForNextUpdate();
    expect(result.current.universitiesData).toEqual(mockResponse);
    jest.restoreAllMocks();
  });

  test('Should clear results', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const { result, waitForNextUpdate } = renderHook((initialValue) => useUniversityData(initialValue), {
      initialProps: 'Test'
    });

    await waitForNextUpdate();

    act(() => {
      result.current.clearResults();
    });

    expect(result.current.universitiesData).toEqual([]);
    jest.restoreAllMocks();
  });

  test('Should call once', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse)
    });

    const { rerender, waitForNextUpdate } = renderHook((initialValue) => useUniversityData(initialValue), {
      initialProps: ''
    });

    rerender('Test1');
    rerender('Test2');

    await waitForNextUpdate();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    jest.restoreAllMocks();
  });

  test('Should return error', async () => {
    const error = new Error('Test error');
    jest.spyOn(global, 'fetch').mockRejectedValue(error);

    const { result, waitForNextUpdate } = renderHook((initialValue) => useUniversityData(initialValue), {
      initialProps: 'Test'
    });

    await waitForNextUpdate();

    expect(result.current.error).toBe(error);
    jest.restoreAllMocks();
  });
});
