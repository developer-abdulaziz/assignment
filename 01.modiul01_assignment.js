// 1) Topic: Online Store Discount Calculator (If-Else Statement)
function calculateDiscountedAmount(totalPurchaseAmount) {
  let discountPercentage = 0;
  let discountedAmount = 0;

  if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
      discountPercentage = 5;
  } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
      discountPercentage = 10;
  } else if (totalPurchaseAmount > 200) {
      discountPercentage = 15;
  }

  discountedAmount = (totalPurchaseAmount * discountPercentage) / 100;
  let totalAmountAfterDiscount = totalPurchaseAmount - discountedAmount;

  console.log(`Total Purchase Amount: $${totalPurchaseAmount}`);
  console.log(`Discounted Amount: $${discountedAmount}`);
  console.log(`Total Amount after Discount: $${totalAmountAfterDiscount}`);

}

calculateDiscountedAmount(200);


// 2) Topic: Filter Even Numbers
function getEvenNumbersOfAnArray(numbers) {
  const EvenNumbers = [];
  for (i = 0; i < numbers.length; i++) {
      let index = i;
      let element = numbers[index];
      if (element % 2 === 0) {
          // console.log(index, element);
          EvenNumbers.push(element);
      }
      // console.log(index, element);
  }
  return EvenNumbers;
}

var myNumbers =  [12, 34, 45, 23, 6, 78, 54, 90];
const EvenNumbers = getEvenNumbersOfAnArray(myNumbers);
console.log(EvenNumbers);



// 3) Topic: Multiplication Table Generator
function myfunction(number) {
  

  for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${i} x ${number} = ${result}`);
  }
}

// Example usage:
myfunction(3);

// 4) Topic: Grade Calculator (JavaScript Switch Case)
function calculateGrade(score) {
  switch (true) {
    case score >= 90:
      return 'A';
    case score >= 80 && score <= 89:
      return 'B';
    case score >= 70 && score <= 79:
      return 'C';
    case score >= 60 && score <= 69:
      return 'D';
    default:
      return 'F';
  }
}


const input = 85;
const grade = calculateGrade(input);
console.log( grade);

