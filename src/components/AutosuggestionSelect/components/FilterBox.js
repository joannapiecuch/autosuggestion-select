import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconChevron } from '../../Icons';
import './FilterBox.scss';

export const FilterBox = ({ name, counter, open, toggle, children }) => (
  <button
    data-testid='filter-button'
    onClick={toggle}
    className={classNames('filter-box', {
      'filter-box--active': counter > 0,
      'filter-box--open': open
    })}>
    <h3 className='filter-box__name'>{name}</h3>
    {counter > 0 && <div className='filter-box__counter d-flex justify--center align--center'>{counter}</div>}
    <div className='filter-box__icon d-flex align--center'>
      <IconChevron direction={open ? 'up' : 'down'} />
    </div>
    {children}
  </button>
);

FilterBox.propTypes = {
  name: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  children: PropTypes.object
};
