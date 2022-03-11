import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputCheckbox } from '../../InputCheckbox';
import './ResultsList.scss';

export const ResultsList = ({ data, onChange }) => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  useEffect(() => {
    onChange(selectedUniversities);
  }, [selectedUniversities, onChange]);

  const handleChange = useCallback(
    (event) => {
      const { checked, value } = event.target;
      if (checked && !selectedUniversities.includes(value)) {
        setSelectedUniversities((values) => [...values, value]);
      }

      if (!checked && selectedUniversities.includes(value)) {
        const values = selectedUniversities.filter((v) => v !== value);
        setSelectedUniversities(values);
      }
    },
    [selectedUniversities, setSelectedUniversities]
  );

  const onReset = useCallback(() => {
    setSelectedUniversities([]);
  }, [setSelectedUniversities]);

  return (
    <>
      <ul data-testid='results-list' className='results-list d-flex flex-column'>
        {selectedUniversities.map((name, index) => (
          <InputCheckbox key={index} onChange={handleChange} checked={true} label={name} id={name} />
        ))}
        {data
          .filter((el) => !selectedUniversities.includes(el.name))
          .map((el, index) => (
            <InputCheckbox
              key={index}
              onChange={handleChange}
              checked={selectedUniversities.includes(el.name)}
              label={el.name}
              id={el.name}
            />
          ))}
      </ul>
      <button
        data-testid='reset-button'
        className='button button--primary results-list__button'
        disabled={!selectedUniversities.length}
        onClick={onReset}>
        Reset
      </button>
    </>
  );
};

ResultsList.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
