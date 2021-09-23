# JavaScript Basic Algorithms

- <a href="http://">Prime number</a>
- <a href="http://">Prime number from array</a>
- <a href="http://">Prime factor</a>
- <a href="http://">Leap year</a>
- <a href="http://">Factorial number</a>
- <a href="http://">Fibonacci number</a>
- <a href="http://">Greatest common divisor</a>
- <a href="http://">Remove duplicate from array</a>
- <a href="http://">Swap number</a>
- <a href="http://">Reverse string</a>
- <a href="http://">Reverse word</a>
- <a href="http://">Longest word</a>
- <a href="http://">Recursion function</a>

<pre>
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
</pre>
