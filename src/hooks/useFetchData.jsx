import { useEffect, useState } from 'react';

export default function useFetchData() {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    setFetchError(false);
    setPending(true);
    const fetchData = async () => {
      try {
        const response = await fetch('./src/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setFetchError(true);
      } finally {
        setPending(false);
      }
    };
    fetchData();
  }, []);
  return { data, pending, fetchError };
}
