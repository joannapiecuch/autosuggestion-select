import PropTypes from 'prop-types';
import './Input.scss';

export const Input = ({ placeholder, onChange, value }) => (
  <div className='input'>
    <input
      data-testid='input-field'
      type='text'
      placeholder={placeholder}
      value={value}
      className='input__field'
      onChange={onChange}
    />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
