// Recursion is a process of calling itselft. A function that calls itselft is called recursion function

// A recursion function must have a condition to stop itselft. Otherwise, the fucntion is called indefinitely.

//example 1 --count number
function countDown(number){
    console.log(number );

    //decrease the number
    const newNumber = number - 1;
    
    //base case
    if (newNumber > 0) {
        countDown(newNumber)
    }
}


// find factorial
function findFactorial(num) {
    if (num ==0) {
        return 1
    }else{
        return num * findFactorial(num - 1)
    }
}
findFactorial(5);


//Fibonacci
function fibonacci(num) {
    if(num <= 1) return 1;
    return fibonacci(num-1) + fibonacci(num-2)
}

fibonacci(10);

// sum
const array = [1,2,3,4,5,6,7,8,9,10];
const output = array.reduce((prevValue, currValue) => prevValue + currValue);
