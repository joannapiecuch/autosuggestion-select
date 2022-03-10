import PropTypes from 'prop-types';
import './IconChevron.scss';

export const IconChevron = ({ direction = 'down' }) => (
  <svg
    className='icon-chevron'
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    strokeWidth='1.5'
    strokeLinecap='round'
    strokeLinejoin='round'>
    <path
      className={`icon-chevron__chevron icon-chevron__chevron--direction-${direction}`}
      d='M22 19L16 13L10 19'
      stroke='white'
      vectorEffect='non-scaling-stroke'
    />
  </svg>
);

IconChevron.propTypes = {
  direction: PropTypes.string
};
