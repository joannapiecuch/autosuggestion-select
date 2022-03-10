import React from 'react';
import './index.scss';
import { IconChevron } from '../Icons';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const FilterBox = ({ name, counter, open, setOpen, children }) => (
  <button
    onClick={setOpen}
    className={classNames('filter-box button', {
      'filter-box--active': counter > 0,
      'filter-box--open': open
    })}>
    <h3 className="filter-box__name">{name}</h3>
    {counter > 0 && <div className="filter-box__counter d-flex justify--center align--center">{counter}</div>}
    <div className="filter-box__icon d-flex align--center">
      <IconChevron direction={open ? 'up' : 'down'} />
    </div>
    {children}
  </button>
);

FilterBox.propTypes = {
  name: PropTypes.string,
  counter: PropTypes.number,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.any
};
