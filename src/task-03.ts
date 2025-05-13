//? Function Composition  

function square(num: number): number {
    return num * num;
}

function double(num: number): number {
    return num * 2;
}

function addFive(num: number): number {
    return num + 5;
}

function processNumber(num: number): number {
    return addFive(double(square(num)));
}

const result = processNumber(3); 
console.log(result); 
