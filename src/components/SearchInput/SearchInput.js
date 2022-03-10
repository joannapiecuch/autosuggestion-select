import PropTypes from 'prop-types';
import { IconSearch } from '../Icons';
import { Input } from '../Input';
import './SearchInput.scss';

export const SearchInput = ({ placeholder, onChange, value }) => (
  <div className='search-input'>
    <div className='search-input__icon'>
      <IconSearch />
    </div>
    <Input onChange={onChange} placeholder={placeholder} value={value} />
  </div>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
