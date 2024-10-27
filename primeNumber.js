const isPrime = 3;

function isPrimeNumber(num) {
    console.log('Math.sqrt(num)', Math.sqrt(num))
  for(let i=0; i < Math.sqrt(num);i++){
    if(num%i===0){
      return false
    }
  }
    return true
}

const prm = isPrimeNumber(isPrime);
console.log(prm)