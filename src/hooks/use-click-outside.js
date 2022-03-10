import { useEffect } from 'react';

export const useClickOutside = (ref, onClickOutside) => {
  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => document.removeEventListener('mousedown', checkIfClickedOutside);
  }, [ref, onClickOutside]);
};
