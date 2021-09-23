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
