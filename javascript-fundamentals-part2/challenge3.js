const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
const john = {
  fullName: "John Smith",
  height: 1.85,
  mass: 92,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
if (mark.calcBMI() > john.calcBMI())
  console.log(
    `${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than ${john.fullName}'s BMI(${john.calcBMI()}).`
  );
else
  console.log(
    `${john.fullName}'s BMI(${john.calcBMI()}) is higher than ${mark.fullName}'s BMI(${mark.calcBMI()}).`
  );
