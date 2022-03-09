import { useUniversityData } from '../../hooks/use-university-data';
import { List } from '../AutosuggestionSelect/components';
import { FilterBox } from '../FilterBox';
import './index.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchInput } from '../SearchInput';
import classNames from 'classnames';

export const SelectWrapper = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchName, setSearchName] = useState('');
  const { universitiesData } = useUniversityData(searchName);
  const counter = 0;

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => document.removeEventListener('mousedown', checkIfClickedOutside);
  }, [open, ref.current]);

  const toggleSelect = useCallback(() => setOpen(!open), [open]);

  const onChange = useCallback((event) => {
    setSearchName(event.target.value);
  }, []);

  return (
    <div ref={ref} className="d-flex flex-column justify--center select-wrapper">
      <FilterBox name="Universities" counter={counter} setOpen={toggleSelect} open={open} />
      <div className={classNames('select-wrapper__dropdown', { 'select-wrapper__dropdown--open': open })}>
        <div className="select-wrapper__dropdown-menu">
          <SearchInput placeholder="Search university" onChange={onChange} />
          <List data={universitiesData} />
        </div>
        {counter > 0 && <button className="button button--primary">Reset</button>}
      </div>
    </div>
  );
};
