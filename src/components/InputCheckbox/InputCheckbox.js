import classNames from 'classnames';
import './InputCheckbox.scss';

export const InputCheckbox = ({ checked, id, onChange, label }) => (
  <label
    className={classNames('input-checkbox d-flex justify--space-between align--center', {
      'input-checkbox--checked': checked
    })}>
    <input type='checkbox' hidden id={id} checked={checked} value={id} onChange={onChange} />
    <span className='input-checkbox__label'>{label}</span>
  </label>
);
