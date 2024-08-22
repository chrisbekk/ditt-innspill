export function sortByDate(data) {
  const today = new Date();

  return data.sort((a, b) => {
    const [dayA, monthA, yearA] = a.deadline.split('.');
    const deadlineA = new Date(yearA, monthA - 1, dayA);
    const daysUntilA = Math.ceil((deadlineA - today) / (1000 * 60 * 60 * 24));

    const [dayB, monthB, yearB] = b.deadline.split('.');
    const deadlineB = new Date(yearB, monthB - 1, dayB);
    const daysUntilB = Math.ceil((deadlineB - today) / (1000 * 60 * 60 * 24));

    return daysUntilA - daysUntilB;
  });
}
