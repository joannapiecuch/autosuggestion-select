import { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '../../hooks';
import './AutosuggestionSelect.scss';
import { Dropdown, FilterBox } from './components';

export const AutosuggestionSelect = ({ onChange }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggle = useCallback(() => setOpen((open) => !open), [setOpen]);
  const handleChange = useCallback(
    (value) => {
      onChange(value);
      setCounter(value.length);
    },
    [onChange, setCounter]
  );

  useClickOutside(ref, toggle);

  return (
    <div ref={ref} className='d-flex flex-column justify--center autosuggestion-select'>
      <FilterBox name='Universities' counter={counter} toggle={toggle} open={open} />
      <Dropdown open={open} setOpen={setOpen} onChange={handleChange} />
    </div>
  );
};

AutosuggestionSelect.propTypes = {
  onChange: PropTypes.func.isRequired
};
