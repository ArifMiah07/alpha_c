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
// define a prime number check function
const checkPrime = ()=>{
    // preloaded prime numbers
    let primeList : number[] = [2,3,5,7];
    // define a num
    const num : number = 11;
    // 
    for(let i = 0; i < primeList.length; i++){
        console.log(num % primeList[i]);
        // console.log(primeList[i]);
        if(num % primeList[i] === 0){
            console.log("nooooooo this is not a prime number", num/primeList[i]);
            break;
        }
    }
    // console.log("yes this is a prime number! ", num);
    primeList.push(num);
    console.log(primeList[primeList.length-1], primeList.at(-1));
    console.log(Math.sqrt(24));

}

checkPrime()
