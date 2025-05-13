//? Array Filtering and Mapping  

type Person = {
    name: string;
    age: number;
    gender: 'male' | 'female';
};

const person: Person[] = [
    { name: "Ratul", age: 30, gender: "male" },
    { name: "Nisa", age: 25, gender: "female" },
    { name: "Riyad", age: 35, gender: "male" },
    { name: "Ayesha", age: 28, gender: "female" }
];

function getNonFemaleNames(people: Person[]): string[] {
    return people
        .filter(p => p.gender !== "female")
        .map(p => p.name);
}

const names = getNonFemaleNames(person);
console.log(names);
