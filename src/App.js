import { useCallback } from 'react';
import './App.scss';
import { AutosuggestionSelect } from './components';

const App = () => {
  const onChange = useCallback((value) => console.log('Selected values', value), []);

  return (
    <div className='app d-flex justify--center align--start'>
      <AutosuggestionSelect onChange={onChange} />
    </div>
  );
};

export default App;
