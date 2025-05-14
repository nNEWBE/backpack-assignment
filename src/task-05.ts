const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (arr: number[]): number => {
    return arr.reduce((sum, current) => {
        return current % 2 === 0 ? sum + current : sum;
    }, 0);
}

const res = sumOfEvenNumbers(numbers);
console.log("Sum of even numbers:", res);