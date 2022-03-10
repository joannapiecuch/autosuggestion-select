import { useCallback, useEffect, useState } from 'react';
import './ResultsList.scss';
import { InputCheckbox } from '../../InputCheckbox';

export const ResultsList = ({ data, setCounter }) => {
  const [selectedUniversities, setSelectedUniversities] = useState([]);

  useEffect(() => {
    // todo: handle counter
    setCounter(selectedUniversities.length);
  }, [selectedUniversities, setCounter]);

  const onChange = useCallback(
    (event) => {
      // todo: handle toggle checked
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

  if (!data || data.length === 0) return null;

  return (
    <ul className="results-list d-flex flex-column">
      {data.map((el, index) => (
        <InputCheckbox
          key={index}
          onChange={onChange}
          checked={selectedUniversities.includes(el.name)}
          label={el.name}
          id={el.name}
        />
      ))}
    </ul>
  );
};
