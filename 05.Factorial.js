// try 1
function findFactorial1(num) {
    let factorial = 1;
    for (let i = 1; i < num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
findFactorial1(5)

// while loop
function findFactorial2(num) {
    let factorial = 1;
    let i = 1;
    while(i < num) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

findFactorial2(5)

// recursion way
function findFactorial3(num){
    if(num == 0) {
        return 1
    }
    else {
        return num * findFactorial3(num - 1)
    }
}

console.log(findFactorial3(3));