// If we list all of the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below the provided parameter value number (1000).

function findSumOfMultiplesRecursion(number, sum = 0) {
  if (number === 0) {
    return sum;
  }
  if (number % 3 === 0 || number % 5 === 0) {
    sum += number; 
  }
  return findSumOfMultiplesRecursion(number - 1, sum);
}

findSumOfMultiplesRecursion(1000);

function findSumOfMultiplesCurry(number) {
  return function(sum = 0) {
    if (number === 0) {
      return sum;
    }
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
    return findSumOfMultiplesCurry(number - 1)(sum);
  }
}

const result = findSumOfMultiplesCurry(1000);
result();

function findSumOfMultiplesClosure(number) {
  let sum = 0;
  return function() {
    if (number === 0) {
      return sum;
    }
    if (number % 3 === 0 || number % 5 === 0) {
      sum += number;
    }
    return findSumOfMultiplesClosure(number - 1)();
  }
}

const result2 = findSumOfMultiplesClosure(1000);
result2();

// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... By considering the terms in the Fibonacci sequence whose values do not exceed the nth term, find the sum of the even-valued terms.

function findSumOfEvenFibonacciRecursion(number, sum = 0) {
  if (number === 0) {
    return sum;
  }
  if (number % 2 === 0) {
    sum += number;
  }
  return findSumOfEvenFibonacciRecursion(number - 1, sum);
}

findSumOfEvenFibonacciRecursion(100);

function findSumOfEvenFibonacciCurry(number) {
  return function(sum = 0) {
    if (number === 0) {
      return sum;
    }
    if (number % 2 === 0) {
      sum += number;
    }
    return findSumOfEvenFibonacciCurry(number - 1)(sum);
  }
}

const result3 = findSumOfEvenFibonacciCurry(100);
result3();

function findSumOfEvenFibonacciClosure(number) {
  let sum = 0;
  return function() {
    if (number === 0) {
      return sum;
    }
    if (number % 2 === 0) {
      sum += number;
    }
    return findSumOfEvenFibonacciClosure(number - 1)();
  }
}

const result4 = findSumOfEvenFibonacciClosure(100);
result4();

// the prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

function findLargestPrimeFactorRecursion(number, divisor = 2) {
  if (number === 1) {
    return divisor;
  }
  if (number % divisor === 0) {
    number /= divisor;
  } else {
    divisor++;
  }
  return findLargestPrimeFactorRecursion(number, divisor);
}

findLargestPrimeFactorRecursion(600851475143);

function findLargestPrimeFactorCurry(number) {
  return function(divisor = 2) {
    if (number === 1) {
      return divisor;
    }
    if (number % divisor === 0) {
      number /= divisor;
    } else {
      divisor++;
    }
    return findLargestPrimeFactorCurry(number)(divisor);
  }
}

const result5 = findLargestPrimeFactorCurry(600851475143);
result5();

function findLargestPrimeFactorClosure(number) {
  let divisor = 2;
  return function() {
    if (number === 1) {
      return divisor;
    }
    if (number % divisor === 0) {
      number /= divisor;
    } else {
      divisor++;
    }
    return findLargestPrimeFactorClosure(number)();
  }
}

const result6 = findLargestPrimeFactorClosure(600851475143);
result6();


