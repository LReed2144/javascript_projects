

function calculateBill(billAmount, taxRate) {
  console.log("Running Calulate Bill");
  const total = billAmount * 1 + taxRate;
  console.log(total);
  return total;
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);


// console.log(`Your total is ${myTotal, myTotal2}`);


