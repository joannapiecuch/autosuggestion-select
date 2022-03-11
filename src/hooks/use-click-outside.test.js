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
  test('Should be call onClick()', () => {
    const fireEvent = createDocumentListenersMock();
    const onClickOutside = jest.fn();
    const element = { current: document.createElement('button') };
    renderHook(() => useClickOutside(element, onClickOutside));
    fireEvent.mouseDown(document.body);
    expect(onClickOutside).toHaveBeenCalledTimes(1);
  });

  test('Should not call onClick() when clicking inside', () => {
    const onClickOutside = jest.fn();
    renderHook(() => useClickOutside(element, onClickOutside));
    const fireEvent = createDocumentListenersMock();
    const element = { current: document.createElement('button') };
    fireEvent.mouseDown(element);
    expect(onClickOutside).not.toHaveBeenCalled();
  });
});
