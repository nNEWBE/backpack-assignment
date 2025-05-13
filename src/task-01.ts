//?  Array Filtering and Mapping  

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
]

const female = person.filter((person) => person.gender === "female")
const names = person.filter(person => person.gender !== "female")
    .map(person => person.name);

console.log(names);
