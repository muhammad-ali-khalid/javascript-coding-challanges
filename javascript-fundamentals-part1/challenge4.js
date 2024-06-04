const billValue = 275;
let tip;
billValue >= 50 && billValue <= 300
  ? (tip = (15 * billValue) / 100)
  : (tip = (20 * billValue) / 100);
console.log(`Final value is ${billValue + tip}`);
