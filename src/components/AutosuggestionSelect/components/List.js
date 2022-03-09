import './List.scss';
import classNames from 'classnames';
import { useCallback, useState } from 'react';

export const List = ({ data }) => {
  const [checked, setChecked] = useState(false);

  const onChange = useCallback((event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  }, []);
  if (!data) return null;

  return (
    <ul className="list d-flex flex-column">
      {data.map((el, index) => (
        <label
          className={classNames('element d-flex justify--space-between  align--center', {
            'element--checked': checked
          })}
          key={index}>
          <input type="checkbox" hidden checked={checked} onChange={onChange} />
          <span>{el.name}</span>
        </label>
      ))}
    </ul>
  );
};
