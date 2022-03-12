import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './InputCheckbox.scss';

export const InputCheckboxComponent = ({ checked, id, onChange, label }) => (
  <label
    data-testid='input-checkbox-label'
    className={classNames('input-checkbox d-flex justify--space-between align--center', {
      'input-checkbox--checked': checked
    })}>
    <input
      data-testid='input-checkbox'
      type='checkbox'
      hidden
      id={id}
      checked={checked}
      value={id}
      onChange={onChange}
    />
    <span className='input-checkbox__label'>{label}</span>
  </label>
);

InputCheckboxComponent.propTypes = {
  checked: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export const InputCheckbox = memo(InputCheckboxComponent);
