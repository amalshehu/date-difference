function dateDifference(d1, m1, y1, d2, m2, y2, days) {
  const valid = [d1, m1, y1, d2, m2, y2].every(
    x => (x > 0 && Number.isInteger(x) ? true : false)
  );
  if (!valid) {
    return 'Invalid date';
  }
  if (m1 == m2 && y1 == y2) return days + d2 - d1;
  days = days + getDaysInMonth(m1, y1) - d1 + 1;
  d1 = 1;
  m1 == 12 ? ((m1 = 1), y1++) : m1++;
  return dateDifference(d1, m1, y1, d2, m2, y2, days);
}

const getDaysInMonth = (month, year) =>
  month == 2
    ? isLeapYear(year) ? 29 : 28
    : [4, 6, 9, 11].includes(month) ? 30 : 31;
const isLeapYear = year => (year % 4 === 0 ? true : false);

console.log(dateDifference(16, 7, 1993, 3, 3, 2018, 0));
console.log(dateDifference(20, 5, 2017, 3, 3, 2018, 0));
