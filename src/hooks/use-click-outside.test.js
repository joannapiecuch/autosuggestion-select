import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useClickOutside } from './use-click-outside';

const createDocumentListenersMock = () => {
  const listeners = {};
  const handler = (domEl, event) => listeners?.[event]?.({ target: domEl });
  document.addEventListener = jest.fn((event, cb) => {
    listeners[event] = cb;
  });
  document.removeEventListener = jest.fn((event) => {
    delete listeners[event];
  });
  return {
    mouseDown: (domEl) => handler(domEl, 'mousedown')
  };
};

describe('UseClickOutside', () => {
  test('', () => {
    const button1 = { current: document.createElement('button') };
    const button2 = { current: document.createElement('button') };
    const fireEvent = createDocumentListenersMock();
    const onClickOutside = jest.fn();
    renderHook(() => useClickOutside(button1, onClickOutside));

    fireEvent.mouseDown(button1.current);
    expect(onClickOutside).not.toHaveBeenCalled();
    fireEvent.mouseDown(button2.current);
    expect(onClickOutside).toHaveBeenCalled();
  });
});
