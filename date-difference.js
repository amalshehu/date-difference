function dateDifference(days, d1, m1, y1, d2, m2, y2) {
  if (m1 == m2 && y1 == y2) {
    return days + d2 - d1;
  }
  days = days + getDaysInMonth(m1, y1) - d1 + 1;
  d1 = 1;
  if (m1 == 12) {
    m1 = 1;
    y1++;
  } else {
    m1++;
  }
  return dateDifference(days, d1, m1, y1, d2, m2, y2);
}

function getDaysInMonth(month, year) {
  if (month == 2) {
    return isLeapYear(year) ? 29 : 28;
  }
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

function isLeapYear(year) {
  return year % 4 === 0 ? true : false;
}
console.log(dateDifference(0, 16, 7, 1993, 3, 3, 2018));
console.log(dateDifference(0, 20, 5, 2017, 3, 3, 2018));
