/** 
 * i just know basic syntax of C, dont know how to actually write a program yet (need to make a lots sm program) so   
 * implementing o prime in js first for better testing 
*/
const checkPrime = ()=>{
    // preloaded prime numbers
    let primeList : number[] = [2,3,5,7];
    // define a num
    const num : number = 11;
    // define a prime number check function
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
    console.log(primeList);

}

checkPrime()
