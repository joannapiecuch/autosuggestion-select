import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { environment } from '../../../environment';

export const useUniversityData = (searchText) => {
  const [universitiesData, setUniversitiesData] = useState([]);
  const [error, setError] = useState();

  const getUniversities = useCallback(
    async (name) => {
      try {
        const result = await fetch(`${environment.PUBLIC_URL}/search?name=${name}`);
        const data = await result.json();
        setUniversitiesData(data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    },
    [setUniversitiesData, setError]
  );

  const getUniversitiesDebounce = useCallback(debounce(getUniversities, 300), [getUniversities]);

  const clearResults = useCallback(() => {
    setUniversitiesData([]);
  }, [setUniversitiesData]);

  useEffect(() => {
    if (searchText) {
      getUniversitiesDebounce(searchText);
    } else {
      clearResults();
    }
  }, [searchText, getUniversities, clearResults]);

  return { universitiesData, clearResults, error };
};
