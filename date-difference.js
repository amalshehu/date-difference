function addOneDay(d1, m1, y1, d2, m2, y2) {
  if (d1 < 30) {
    return [d1 + 1, m1, y1];
  } else if (m1 < 12) {
    return [1, m1 + 1, y1];
  } else {
    return [1, 1, y1 + 1];
  }
}

function numberOfDays(d1, m1, y1, d2, m2, y2) {
  let days = 0;
  days++;

  while (d1 != d2 && m1 != m2 && y1 != y2) {
    days++;
    [d1, m1, y1] = [...addOneDay(d1, m1, y1, d2, m2, y2)];
    console.log('D M Y', d1, m1, y1);
  }
  return days;
}
console.log(numberOfDays(20, 5, 2017, 3, 3, 2018));
