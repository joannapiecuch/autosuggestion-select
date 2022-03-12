import { useCallback, useEffect, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';
import { config } from '../../../config';

const searchParams = 'search?name=';
export const useUniversityData = (searchText) => {
  const [universitiesData, setUniversitiesData] = useState([]);
  const [error, setError] = useState();

  const getUniversities = useCallback(
    async (name) => {
      try {
        const result = await fetch(`${config.PUBLIC_URL}/${searchParams}${name}`);
        const data = await result.json();
        setUniversitiesData(data);
        setError(null);
      } catch (error) {
        setError(error);
      }
    },
    [setUniversitiesData, setError]
  );

  const getUniversitiesDebounce = useMemo(() => debounce(getUniversities, 300), [getUniversities]);

  const clearResults = useCallback(() => {
    setUniversitiesData([]);
  }, [setUniversitiesData]);

  useEffect(() => {
    if (searchText) {
      getUniversitiesDebounce(searchText);
    } else {
      clearResults();
    }
  }, [searchText, clearResults, getUniversitiesDebounce]);

  return { universitiesData, clearResults, error };
};
