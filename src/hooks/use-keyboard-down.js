import { useEffect } from 'react';

export const useKeyboardDown = (keyName, onKeyboardDown) => {
  useEffect(() => {
    const checkIfKeyboardDown = (event) => {
      if (event.key === keyName) onKeyboardDown();
    };

    document.addEventListener('keydown', checkIfKeyboardDown);
    return () => document.removeEventListener('keydown', checkIfKeyboardDown);
  }, [keyName, onKeyboardDown]);
};
