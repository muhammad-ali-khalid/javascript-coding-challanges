"use script";
const calcAverage = (score1, score2, score3) =>
  (score1 + score2 + score3) / 3;
const checkWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg >= 2 * koalasAvg)
    console.log(`Dolphins wins with an average of ${dolphinsAvg}`);
  else if (koalasAvg >= 2 * dolphinsAvg) {
    console.log(`Koalas wins with an average of ${koalasAvg}`);
  } else {
    console.log("No team wins");
  }
};
const dolphinsAvg = calcAverage(85, 54, 41);
console.log(dolphinsAvg);
const koalasAvg = calcAverage(23, 34, 27);
checkWinner(dolphinsAvg, koalasAvg);
