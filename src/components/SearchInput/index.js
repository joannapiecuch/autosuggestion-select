import { IconSearch } from '../Icons';
import PropTypes from 'prop-types';
import './index.scss';
import { Input } from '../Input';

export const SearchInput = ({ placeholder, defaultValue = '', onChange }) => (
  <div className="search-input">
    <div className="search-input__icon">
      <IconSearch />
    </div>
    <Input onChange={onChange} defaultValue={defaultValue} placeholder={placeholder} />
  </div>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};
