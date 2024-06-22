// String Manipulation Functions:
//Reverse a String

var str = "hello bonjour";
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);


//Count Characters:
var testScores = [64, 86, 73, 82, 95, 62, 87, 99];
var s=0
for (let i=0;i<8;i++){
   s=s+testScores[i]
   console.log("i: "+i+  "s:  "+s)
}
//Capitalize Words:

console.log(s)
var p ="hello bonjour"
let arr=p.split(" ")
for (let i=0;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length)


}
console.log(arr.join(" "))
//Array Functions:

//Find Maximum and Minimum 

var tab = [12,25,14,0,78]
var min = Math.min(...tab)

console.log(min)

var tab = [12,25,14,0,78]
var max = Math.max(...tab)

console.log(max)

//Sum of Array: 
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [10,20,30,40];
let totalSum = sumArray(numbers);
console.log( totalSum);

//Filter Array:
let Array = [3, 8, 1, 6, 4, 9, 2];
let filteredArray = Array.filter(arr => arr > 5);

console.log(filteredArray);

//Factorial:
var n = 5
var fact=1
for(let i=1;i<=n;i++){
fact = fact*i
}
console.log(fact)

//Prime Number Check:

function isPrime(number) {

    if (number < 2) {
        return false;
    }

 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(isPrime(7)); 
console.log(isPrime(10)); 
console.log(isPrime(23)); 
console.log(isPrime(1)); 
console.log(isPrime(0));

//Fibonacci Sequence:

function fibonacciIterative(n) {
    if (n <= 1) {
         return n;
    }

    let fibPrev = 0;
    let fibCurr = 1;
    let fibNext = 0;

    for (let i = 2; i <= n; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return fibCurr;
}


console.log(fibonacciIterative(0));
console.log(fibonacciIterative(1)); 
console.log(fibonacciIterative(2)); 
console.log(fibonacciIterative(5));
console.log(fibonacciIterative(10)); 



