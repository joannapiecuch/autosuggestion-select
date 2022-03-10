import { useCallback, useRef, useState } from 'react';
import { useClickOutside, useKeyboardDown, useUniversityData } from '../../hooks';
import './AutosuggestionSelect.scss';
import { Dropdown, FilterBox } from './components';

export const AutosuggestionSelect = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const [counter, setCounter] = useState(0);
  const { universitiesData, clearResults } = useUniversityData(searchName);

  const closeDropdown = useCallback(() => {
    setSearchName('');
    clearResults();
    setOpen(false);
  }, [setSearchName, setOpen, clearResults]);

  useClickOutside(ref, closeDropdown);
  useKeyboardDown('Escape', closeDropdown);

  const toggleSelect = useCallback(() => setOpen(!open), [open, setOpen]);

  const onReset = useCallback(() => console.log('RESET'), []);

  const onChange = useCallback(
    (event) => {
      setSearchName(event.target.value);
    },
    [setSearchName]
  );

  return (
    <div ref={ref} className='d-flex flex-column justify--center autosuggestion-select'>
      <FilterBox name='Universities' counter={counter} setOpen={toggleSelect} open={open} />
      <Dropdown
        universitiesData={universitiesData}
        open={open}
        onChange={onChange}
        searchName={searchName}
        onReset={onReset}
        setCounter={setCounter}
      />
    </div>
  );
};
