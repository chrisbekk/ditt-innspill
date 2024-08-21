export function filterData(data, filter, activeKommune) {
  return (data?.projects || []).filter(project => {
    const matchesSearchTerm = project.title.toLowerCase().includes(filter);
    const matchesKommune = activeKommune
      ? project.kommune === activeKommune.name
      : true;
    return matchesSearchTerm && matchesKommune;
  });
}
