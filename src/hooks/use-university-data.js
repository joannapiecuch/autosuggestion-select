import { useCallback, useEffect, useState } from 'react';
import { environment } from '../environment';

export const useUniversityData = (searchName) => {
  const [universitiesData, setUniversitiesData] = useState([]);

  const getUniversities = useCallback(
    async (name) => {
      const result = await fetch(`${environment.PUBLIC_URL}/search?name=${name}`);
      const data = await result.json();
      setUniversitiesData(data);
    },
    [setUniversitiesData]
  );

  useEffect(() => {
    if (searchName) {
      getUniversities(searchName);
    }
  }, [searchName, getUniversities]);

  const clearResults = useCallback(() => {
    setUniversitiesData([]);
  }, [setUniversitiesData]);

  return { universitiesData, clearResults };
};
