function payment() {
  let people, money;
  people = Number(prompt("Type the number of people: "));
  if (typeof people === "string" || isNaN(people) || people === 0) {
    alert("Error, please type a number");
  } else if (people != null) {
    money = Number(prompt("Type the amount of money"));
    if (typeof money === "string" || isNaN(money) || money === 0) {
      alert("Error, please type an amount of money");
    }
  }
  if (money && people != 0) {
    if (money < 4000) {
      let totalToPay = money / people;

      console.log(`The total amount of money is: $${money}`);

      totalToPay = totalToPay * 1.25;
      console.log(`The amount of the tips is: $${money * 0.25}`);
      console.log(`The amount with the tips is: $${money * 1.25}`);
      console.log(`The total amount of money t pays is: $${totalToPay}`);
      alert(`The total amount to pay per person is: $${totalToPay}`);

      return totalToPay;
    } else if (money >= 4000) {
      money = money * 0.9;
      totalToPay = money / people;
      alert(
        `The total amount to pay per person with the discount of 10% is: $${totalToPay}`
      );
      console.log(`The total amount of money is: $${money}`);
      alert("Remember the 25% tips");
      console.log(`The amount of the tips is: $${money * 0.25}`);
      totalToPay = (money * 1.25) / people;
      alert(`The amount per person now is: $${totalToPay}`);
      console.log(`The total amount of money t pays is: $${totalToPay}`);
      return totalToPay;
    }
  }
}
let payed = payment();
