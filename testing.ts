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

// checkPrime();
const primeAgain = () => {
  let list = [2, 3];
  const number = Math.floor(Math.random() * 10000000) + 2;
  const sqrt_ = Math.round(Math.sqrt(number)); //
  const lastNumb: number | undefined = Number(list.at(-1));
  for (let i = lastNumb + 1; i < sqrt_; i++) {
    if (lastNumb < sqrt_) {
      if (!isEven(i)) {
        if (isPrime(i)) {
          list.push(i);
        }
      }
    }
  }
  // console.log(list, list.length);
  const checkIsPrime = (numb: number) => {
    // console.log(numb);
    if (!isEven(numb)) {
      //
      for (let i = 0; i < list.length; i++) {
        // console.log(list[i]);
        if (numb % list[i] === 0) {
          console.log(
            `  ${numb} = ${list[i]} * ${numb / list[i]}, ${numb % list[i]}`,
          );
          // break;
          return false;
        }
      }
      return true;
    }
    return false;
  };
  // checkIsPrime(number);
  console.log(number, checkIsPrime(number) ? "is prime" : "is not prime");
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

for (let i = 0; i < 100; i++) {
  primeAgain();
}
