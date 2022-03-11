import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconClose } from '../../Icons';
import { SearchInput } from '../../SearchInput';
import './Dropdown.scss';
import { ResultsList } from './ResultsList';

export const Dropdown = ({ onSearchChange, searchName, universitiesData, onClose, open, onChange, error }) => (
  <div data-testid='dropdown' className={classNames('dropdown dropdown--mobile', { 'dropdown--open': open })}>
    <div className='dropdown__header'>
      <button
        data-testid='dropdown-close-button'
        onClick={onClose}
        className='dropdown__header-icon d-flex align--center justify--center'>
        <IconClose />
      </button>
      <span className='dropdown__header-name'>Universities</span>
    </div>
    <div className='dropdown__search'>
      <SearchInput placeholder='Search university' onChange={onSearchChange} value={searchName} />
      {error && <span className='error-message'>{error.message}</span>}
    </div>
    <ResultsList data={universitiesData} onChange={onChange} />
  </div>
);

Dropdown.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  universitiesData: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.shape({ message: PropTypes.string.isRequired })
};
