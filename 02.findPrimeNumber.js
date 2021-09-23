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

const result = findPrime(numbers);
console.log(result);