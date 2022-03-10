import { useCallback, useRef, useState } from 'react';
import { useClickOutside, useKeyboardDown } from '../../hooks';
import './AutosuggestionSelect.scss';
import { Dropdown, FilterBox } from './components';
import { useUniversityData } from './hooks';

export const AutosuggestionSelect = ({ onChange }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [counter, setCounter] = useState(0);
  const { universitiesData, clearResults, error } = useUniversityData(searchText);

  const closeDropdown = useCallback(() => {
    setSearchText('');
    clearResults();
    setOpen(false);
  }, [setSearchText, setOpen, clearResults]);

  useClickOutside(ref, closeDropdown);
  useKeyboardDown('Escape', closeDropdown);

  const toggleSelect = useCallback(() => setOpen(!open), [open, setOpen]);
  const onSearchInputChange = useCallback((event) => setSearchText(event.target.value), [setSearchText]);
  const handleChange = useCallback(
    (value) => {
      onChange(value);
      setCounter(value.length);
    },
    [onChange]
  );

  return (
    <div ref={ref} className='d-flex flex-column justify--center autosuggestion-select'>
      <FilterBox name='Universities' counter={counter} setOpen={toggleSelect} open={open} />
      <Dropdown
        universitiesData={universitiesData}
        open={open}
        onClose={closeDropdown}
        onSearchChange={onSearchInputChange}
        searchName={searchText}
        onChange={handleChange}
        error={error}
      />
    </div>
  );
};
