/**
 * i just know basic syntax of C, dont know how to actually write a program yet (need to make a lots sm program) so
 * implementing o prime in js first for better testing
 */
/**
 * hard to explain what exactly im trying to do
 * preloaded prime number list [2,3]
 * pike a random number like 23 or 24
 * now check if 23 or 24 is a prime number
 * 1st find square root of 23 or 24
 * ok, we know, sqrt(23) = 4.795... || sqrt(24) = 4.898...
 * now check if is there any prime in our primeList[] that is less than or equal to sqrt(23||24)
 * if sqrt(23|| 24 || that random number) <= primeList[i]
 * do --> divide that random number with values from primeList that is <= round(sqrt(that random number))
 * else ()
 * do --> add new prime numbers starts from last number from the primeList and
 *        until primeList.at(-1) is greater than sqrt(that random number)
 * and now do --> divide that random number with values from primeList that is <= round(sqrt(that random number))
 * and finally show if that random number is a prime or not
 *
 * note: this buggy explanation will be revised and can be done some changes
 *
 */

/** shortly
 * Preload prime numbers [2,3]
 * Pick a random number like 23 or 24
 * Check if it’s prime by dividing with primes in the list that are ≤ sqrt(number)
 * If needed, extend the prime list until last prime ≥ sqrt(number)
 */
//
// // define a prime number check function
// const checkPrime = () => {
//   // preloaded prime numbers
//   let primeList: number[] = [2, 3];
//   // define a num
//   const num: number = 11;
//   //
//   for (let i = 0; i < primeList.length; i++) {
//     console.log(num % primeList[i]);
//     // console.log(primeList[i]);
//     if (num % primeList[i] === 0) {
//       console.log("nooooooo this is not a prime number", num / primeList[i]);
//       break;
//     }
//   }
//   // console.log("yes this is a prime number! ", num);
//   primeList.push(num);
//   console.log(primeList[primeList.length - 1], primeList.at(-1));
//   console.log(Math.sqrt(24));
// };

// checkPrime();

const primeAgain = () => {
  // preload prime numbers
  let list = [2, 3];
  // pike a random number
  const number = 59;
  // check if prime number divisor is exist in the list
  // find sqrt of random number
  const sqrt_ = Math.round(Math.sqrt(number)); //
  // console.log(sqrt_);
  // first check if that sqrt_ is a prime
  // const is_sqrt_prime = isPrime(sqrt_);
  // console.log(sqrt_, is_sqrt_prime ? "is prime" : "is not prime");
  // do something
  const lastNumb: number | undefined = Number(list.at(-1));
  console.log("last num", lastNumb);
  // comapre
  if (lastNumb < sqrt_) {
    // check prime if that sqrt is odd number
    if (!isEven(sqrt_)) {
      // console.log("is prime? ", isPrime(sqrt_));
    } else {
      // console.log("even number cant be prime");
    }
    //
    // console.log(list[i]);
    // check if prime after last number from list and break after finding a prime
  } else {
    //
    //
    console.log("not");
  }
  for (let i = lastNumb + 1; i < sqrt_; i++) {
    if (lastNumb < sqrt_) {
      if (!isEven(i)) {
        if (isPrime(i)) {
          list.push(i);
        }
      }
    }
  }
  console.log(list);
};

// define a function that check if a number is prime
const isPrime = (number: number) => {
  //
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
};

// check if is a even number
const isEven = (number: number) => {
  //
  if (number % 2 === 0) return true;
  return false;
};

// console.log(isPrime(37));
primeAgain();
console.log(isEven(37));
