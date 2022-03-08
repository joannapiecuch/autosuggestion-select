import './index.scss';
import PropTypes from 'prop-types';

export const Input = ({ placeholder, defaultValue = '', onChange }) => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="input__field"
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func
};
