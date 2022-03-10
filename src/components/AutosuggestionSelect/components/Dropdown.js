import classNames from 'classnames';
import { ResultsList } from './ResultsList';
import { SearchInput } from '../../SearchInput';
import './Dropdown.scss';

export const Dropdown = ({ onChange, searchName, universitiesData, open, onReset, setCounter }) => {
  return (
    <div className={classNames('dropdown', { 'dropdown--open': open })}>
      <div className="dropdown__search">
        <SearchInput placeholder="Search university" onChange={onChange} value={searchName} />
      </div>
      <ResultsList data={universitiesData} setCounter={setCounter} />
      {universitiesData.length > 0 && (
        <button className="button button--primary" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};
