const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 81;
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 86;
const dolphinsAverageScore =
  (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log("Dolphins wins");
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log("Koalas wins");
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100
) {
  console.log("Math Draw");
} else {
  console.log("No team wins a trophy");
}
