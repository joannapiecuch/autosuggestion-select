import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useKeyboardDown } from './use-keyboard-down';

describe('UseKeyboardDown', () => {
  test('Checks keyboard down', () => {
    const onKeyboardDown = jest.fn();
    renderHook(() => useKeyboardDown('Escape', onKeyboardDown));
    fireEvent.keyDown(document, { key: 'Escape', keyCode: 27 });

    expect(onKeyboardDown).toHaveBeenCalled();
  });
});
