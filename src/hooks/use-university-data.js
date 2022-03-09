import { useCallback, useEffect, useState } from 'react';
import { environment } from '../environment';

export const useUniversityData = (searchName) => {
  const [universitiesData, setUniversitiesData] = useState([]);

  const getUniversities = useCallback(async (name) => {
    const result = await fetch(`${environment.PUBLIC_URL}/search?name=${name}`);
    const data = await result.json();
    setUniversitiesData(data);
  }, []);

  useEffect(() => {
    console.log(searchName);
    if (searchName) {
      getUniversities(searchName);
    }
  }, [searchName]);

  return { universitiesData };
};
