import { FilterBox } from '../FilterBox';
import './index.scss';
import { useCallback, useEffect, useRef, useState } from 'react';
import { SearchInput } from '../SearchInput';
import classNames from 'classnames';

export const SelectWrapper = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
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

  const onChange = useCallback((event) => console.log(event.target.value), []);

  return (
    <div ref={ref} className="d-flex flex-column justify--center select-wrapper">
      <FilterBox name="Universities" counter={counter} setOpen={toggleSelect} open={open} />
      <div className={classNames('select-wrapper__dropdown', { 'select-wrapper__dropdown--open': open })}>
        <SearchInput placeholder="Search university" onChange={onChange} />
        <ul className="select-wrapper__list">
          <li>Result</li>
        </ul>
        <button className="button button--primary">Reset</button>
      </div>
    </div>
  );
};
