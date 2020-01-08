

function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  console.log("Running Calulate Bill");
  const total = billAmount * 1 + taxRate;
  console.log(total);
  return total;
}
const lyndsTotal = 70;
const lyndsTaxRate = 0.20;
// const myTotal = calculateBill(lyndsTotal,
//   lyndsTaxRate);


function sayHiTo(firstName) {
  return`Hello ${firstName}`;
}

const greeting = sayHiTo("Lyndsey");
console.log(greeting);


// console.log(`Your total is ${myTotal, myTotal2}`);


