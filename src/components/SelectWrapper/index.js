import { FilterBox } from '../FilterBox';
import './index.scss';
import { useCallback, useState } from 'react';
import { SearchInput } from '../SearchInput';
import classNames from 'classnames';

export const SelectWrapper = () => {
  const [open, setOpen] = useState(false);
  const counter = 0;

  const toggleSelect = useCallback(() => setOpen(!open), [open]);

  const onChange = useCallback((event) => console.log(event.target.value), []);

  return (
    <div className="d-flex flex-column justify--center select-wrapper">
      <FilterBox name="Universities" counter={counter} setOpen={toggleSelect} open={open} />
      <div className={classNames('select-wrapper__dropdown', { 'select-wrapper__dropdown--open': open })}>
        <SearchInput placeholder="Search university" onChange={onChange} />
        <ul className="select-wrapper__list">
          <li>Result</li>
        </ul>
      </div>
    </div>
  );
};
