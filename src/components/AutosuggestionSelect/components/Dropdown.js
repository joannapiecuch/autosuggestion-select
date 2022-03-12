import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useKeyboardDown } from '../../../hooks';
import { IconClose } from '../../Icons';
import { SearchInput } from '../../SearchInput';
import { KeyboardKey } from '../consts';
import { useUniversityData } from '../hooks';
import './Dropdown.scss';
import { ResultsList } from './ResultsList';

export const Dropdown = ({ open, setOpen, onChange }) => {
  const [searchText, setSearchText] = useState('');
  const { universitiesData, clearResults, error } = useUniversityData(searchText);

  useEffect(() => {
    if (!open) {
      setSearchText('');
      clearResults();
    }
  }, [open, setSearchText, clearResults]);

  const onSearchInputChange = useCallback((event) => setSearchText(event.target.value), [setSearchText]);
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  useKeyboardDown(KeyboardKey.escape, handleClose);

  return (
    <div data-testid='dropdown' className={classNames('dropdown dropdown--mobile', { 'dropdown--open': open })}>
      <div className='dropdown__header'>
        <button
          data-testid='dropdown-close-button'
          onClick={handleClose}
          className='dropdown__header-icon d-flex align--center justify--center'>
          <IconClose />
        </button>
        <span className='dropdown__header-name'>Universities</span>
      </div>
      <div className='dropdown__search'>
        <SearchInput placeholder='Search university' onChange={onSearchInputChange} value={searchText} />
        {error && <span className='error-message'>{error.message}</span>}
      </div>
      <ResultsList data={universitiesData} onChange={onChange} />
    </div>
  );
};

Dropdown.propTypes = {
  setOpen: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
