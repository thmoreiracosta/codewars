/*Complete the function which takes two 
arguments and returns all numbers which are divisible 
by the given divisor. First argument is an array of numbers and the second is the divisor.*/


function divisibleBy(numbers, divisor) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArray.push(numbers[i]);
    } 
  }
return newArray;
}
