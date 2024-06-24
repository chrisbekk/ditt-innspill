import { useEffect, useState } from 'react';

export default function useFetchProject(id) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setFetchError(false);
      setPending(true);

      try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const json = await response.json();
        const project = json.projects.find(
          project => project.id === parseInt(id),
        );
        setData(project);
      } catch (error) {
        console.log(error);
        setFetchError(true);
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, pending, fetchError };
}
