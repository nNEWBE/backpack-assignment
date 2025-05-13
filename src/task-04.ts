//? Sorting Objects  

type Car = {
    make: string;
    model: string;
    year: number;
};

const cars: Car[] = [
    { make: "Toyota", model: "Corolla", year: 2018 },
    { make: "Honda", model: "Civic", year: 2015 },
    { make: "Tesla", model: "Model 3", year: 2022 },
    { make: "Ford", model: "Focus", year: 2010 }
];

const sortCarsByYear = (cars: Car[]): Car[] => {
    return cars.sort((a, b) => a.year - b.year);
}

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
