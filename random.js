// lest than 100
// give two number and return true if the sum of both number less than 100 otherwise return false

function isLess100(n1, n2) {
    if (n1 + n2 < 100) {
        return true;
    } else {
        return false;
    }
}
isLess100(50, 40);

//find the smallest and largest number of array

//try1
function minMax1(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return [min, max]
}
minMax1([1, 5, 2, 4, 8, 9, 7, 52]); //result [1,52]


//try 2
function minMax2(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    numbers.forEach((num) => {
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    })
    return [min, max]
}
minMax2([1, 23, 4, 5, 6, 66, 77]); // result [1,77]


//try 3
function minMax3(numbers) {
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) min = element;
        if (element > max) max = element;
    }
    return [min, max];
}
minMax3([1, 2, 3, 44, 5, 6, 7, 8, 99]); //result [1,99]

// try 4
function minMax4(numbers) {
    let min = numbers[0];
    let max = numbers[1];

    numbers.map(num => {
        if (num < min) min = num;
        if (num > max) max = num;
    })
    return [min, max]
}

minMax4([1, 2, 3, 4, 5, 6, 77, 88]); // result [1,88]


// split a number

//try 1 (It's my owan logic)
function numberSplit(number) {
    let num1 = 0;
    let num2 = 0;
    
    if(number % 2 === 0) {
        num1 = number / 2;
        num2 = number / 2;
    }else{
        num1 = Math.floor(number / 2);
        num2 = Math.ceil(number / 2);
    }
    return [num1, num2]
}
numberSplit(11); // result [5,6]

//try 2
function numberSplit2(num) {
    return [Math.floor(num / 2), Math.ceil(num / 2)]
}
numberSplit2(11); // result [5,6]

//convert number to hexadecimal string
const hexString = (01717460240).toString();

const number = parseInt(hexString, "6f1");
console.log(number);