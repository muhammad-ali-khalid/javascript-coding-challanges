const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
  console.log(`Marks's BMI ${markBMI} is higher than John's BMI ${johnBMI}`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Marks's BMI ${markBMI}`);
}
