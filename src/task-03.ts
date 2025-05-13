//? Function Composition  

const square = (num: number): number => {
    return num * num;
}

const double = (num: number): number => {
    return num * 2;
}

const addFive = (num: number): number => {
    return num + 5;
}

const processNumber = (num: number): number => {
    return addFive(double(square(num)));
}

const result = processNumber(3);
console.log(result); 
