// export function sortByDate(data) {
//   const today = new Date();
//   let dates = [];

//   for (let i = 0; i < data.length; i++) {
//     // Get DEADLINE DATE OBJECT
//     const deadlineString = data[i].deadline;
//     const [day, month, year] = deadlineString.split('.');
//     const deadline = new Date(year, month - 1, day);

//     // DETERMINE DAYS UNTIL DEADLINE
//     const deltaTime = deadline - today;
//     const deltaDays = Math.ceil(deltaTime / (1000 * 60 * 60 * 24));
//     dates.push({ [data[i].id]: deltaDays });
//   }
//   console.log(dates.sort((a, b) => b - a));
// }
export function sortByDate(data) {
  const today = new Date();

  return data.sort((a, b) => {
    // Convert `a.deadline` to a Date object and calculate the difference in days
    const [dayA, monthA, yearA] = a.deadline.split('.');
    const deadlineA = new Date(yearA, monthA - 1, dayA);
    const daysUntilA = Math.ceil((deadlineA - today) / (1000 * 60 * 60 * 24));

    // Convert `b.deadline` to a Date object and calculate the difference in days
    const [dayB, monthB, yearB] = b.deadline.split('.');
    const deadlineB = new Date(yearB, monthB - 1, dayB);
    const daysUntilB = Math.ceil((deadlineB - today) / (1000 * 60 * 60 * 24));

    // Compare the number of days until each deadline
    return daysUntilA - daysUntilB;
  });
}
