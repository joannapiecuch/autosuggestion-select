import './index.scss';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, onChange, value }) => (
  <div className="input">
    <input type="text" placeholder={placeholder} value={value} className="input__field" onChange={onChange} />
  </div>
);

Input.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
