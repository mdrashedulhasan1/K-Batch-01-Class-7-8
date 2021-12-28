// 1,N=5
function isPrimeNumber(n){
    for(i=2; i<n; i++){
        if(n%i==0){
            return "Not a prime number";
        }
    }
    return "Your number is a prime number";

}
var result = isPrimeNumber(5);
console.log(result);