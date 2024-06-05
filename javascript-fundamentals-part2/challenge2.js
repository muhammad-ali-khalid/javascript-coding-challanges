function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) return (15 * billValue) / 100;
  else return (20 * billValue) / 100;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = new Array();
const total = new Array();
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(tips[i] + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(total);
