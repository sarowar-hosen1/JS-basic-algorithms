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

const output = removeDuplicate(numbers);
console.log(output);