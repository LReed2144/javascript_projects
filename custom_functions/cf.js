

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log("Running Calulate Bill");
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}
const lyndsTotal = 70;
const lyndsTaxRate = 0.20;
// const myTotal = calculateBill(lyndsTotal,
//   lyndsTaxRate);


function sayHiTo(firstName) {
  return`Hello ${firstName}`;
}

// const greeting = sayHiTo("Lyndsey");
// console.log(greeting);
// console.log(`Your total is ${myTotal, myTotal2}`);

function doctorize(name = 'Silly Goose') {
  return `Dr. ${name}`;
}


const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);
