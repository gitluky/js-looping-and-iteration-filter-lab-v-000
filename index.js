// Code your solution in this file
function findMatching (drivers, name) {
  const driversMatched = [];
  for (const driver of drivers) {
    if (driver === name) {
      driversMatched.push(driver);
    }
  }
  return driversMatched;
}
