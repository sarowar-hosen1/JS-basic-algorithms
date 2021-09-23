# JavaScript Basic Algorithms

### Topic

- <a href="#prime">Prime number</a>
- <a href="#prime_array">Prime number from array</a>
- <a href="#prime_factor">Prime factor</a>
- <a href="#leap_year">Leap year</a>
- <a href="#factorial">Factorial number</a>
- <a href="#fibonacci">Fibonacci number</a>
- <a href="#greatest_common">Greatest common divisor</a>
- <a href="#remove_duplicate">Remove duplicate from array</a>
- <a href="#swap_number">Swap number</a>
- <a href="#reverse_string">Reverse string</a>
- <a href="#reverse_word">Reverse word</a>
- <a href="#longest_word">Longest word</a>
- <a href="#recursion">Recursion function</a>

<h3 id="prime">Prime number</h3>

```js
    function isPrime(n) {
    let divisor = 2;

    while (n > divisor) {
        if (n % divisor === 0) {
            return false;
        }
        else {
            divisor++;
        }
    }
    return true;
}

const result = isPrime(50);
console.log(result); // false
```

<h3 id="prime_array">Prime number from array</h3>

```js
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 17, 21, 23];

function findPrime(numbers) {
    const prime = [];

    numbers.map(num => {
        let divisor = 2;
        while (num > divisor) {
            if (num % divisor === 0) {
                return false;
            }
            else {
                divisor++;
            }
        }
        return prime.push(num);
    })
    return prime;
}

const result = findPrime(numbers); //result is 3,5,7,17,23
```

<h3 id="prime_factor">Prime factor</h3>

```js
function primeFactor(n){
    const factor = [];
    let divider = 2;

    while( n > 2){
        if (n % divider == 0){
            factor.push(divider);
            n = n / divider;
        }else{
            divider++;
        }
    }
    return factor;
}

const result = primeFactor(50);
console.log(result); //result will be [2,5,5];
```

<h3 id="leap_year">Leap year</h3>

```js
function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 === !0 || year % 400 === 0) {
        return true;
    }else return false;
}

const result = isLeapYear(1600);
console.log(result); // result wiil be true 
```

<h3 id="factorial">Factorial</h3>

```js
// try 1
function findFactorial1(num) {
    let factorial = 1;
    for (let i = 1; i < num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
findFactorial1(5)  // result will be 120

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

findFactorial2(5)  //result will be 120

// recursion way
function findFactorial3(num){
    if(num == 0) {
        return 1
    }
    else {
        return num * findFactorial3(num - 1)
    }
}

findFactorial3(5);  //result will be 120
```

<h3 id="fibonacci">Fibonacci</h3>

```js
function fibonacci(n) {
    const fibo = [0,1];
    if(n <=2) return 1;
    
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i-2]
    }

    return fibo[n]
}

fibonacci(11); // result will be 89
```

<h3 id="greatest_common">Greatest common number</h3>

```js
function greatestCommonDivisor(a, b){
    var divisor = 2, 
    greatestDivisor = 1;

    if(a < 2 || b < 2) return 1;

    while(a >= divisor && b >= divisor){
        if (a % divisor == 0 && b % divisor == 0) {
            greatestDivisor = divisor;
        }
        divisor ++;
    }
    return greatestDivisor;
}

greatestCommonDivisor(7,21); // result will be 7
```

<h3 id="remove_duplicate">Remove duplicate from array</h3>

```js
const numbers = [1, 2, 3, 4, 3, 2, 4, 5, 69,555,55,55,55,55, 78, 7, 5, 85];

function removeDuplicate(numbers) {
    const unique = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        const index = unique.indexOf(element);
        if (index == -1) {
            unique.push(element);
        }
    }
    return unique.sort((a, b) => a -b);
}

removeDuplicate(numbers); //result will be  [1, 2, 3, 4, 5, 7, 55, 69, 78, 85]
```

<h3 id="swap_number">Swap number</h3>

```js
//method 1

function swap1(a, b) {
    console.log("before swap a=" + a + ", b=" + b); // a = 10 & b = 20
    temp = a;
    a = b;
    b = temp;
    console.log("After swap a=" + a + ", b=" + b);  // a = 20 & b = 10
}

function swap2(a, b) {
    console.log("before swap a=" + a + ", b=" + b); // a = 10 & b = 20
    a = a + b;  // 10 + 20 =30
    b = a - b;  // 30 - 20 = 10;
    a = a - b;  // 30 - 10 = 20;
    console.log("After swap a=" + a + ", b=" + b); // a = 20 & b = 10
}

function swap3(a, b) {
    console.log("Before swap a=" + a + ", b=" + b); // a =10 & b =20
    [a, b] = [b, a];
    console.log("After swap a=" + a + ", b=" + b); // a = 20 & b = 10
}

```

<h3 id="reverse_string">Reverse string</h3>

```js
//try 1
function reverse(str) {
    var rtnStr = [];
    if (!str || typeof str != 'string' || str.length < 2) return str;

    for (var i = str.length - 1; i >= 0; i--) {
        rtnStr.push(str[i]);
    }
    return rtnStr.join('');
}

reverse("I love my country");


//try 2
function reverse2(str) {
    if(!str || str.length < 2 ) return str;
    
    return str.split('').reverse().join('');
}

reverse2("I love my country");
```

<h3 id="reverse_word">Reverse word</h3>

```js
//try 1
function reverse(word) {
    return word.split(' ').reverse().join(' ');
}
reverse("I love my country");
```

<h3 id="longest_word">Longest word</h3>

```js
function findLongestWord(str) {
    const srtSplit = str.split(' ');
    var longestWord = "";
  
    srtSplit.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  findLongestWord("I love my country");

```

<h3 id="recursion">Recursion function</h3>

```js
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
```
