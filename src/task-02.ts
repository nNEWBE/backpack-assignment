//? Object Manipulation  

type Book = {
    title: string;
    author: string;
    year: number;
}

const books: Book[] = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const getBookTitles=(books:Book[])=>{
    return books.map((book)=>book.title);
}

const bookTitles=getBookTitles(books);
console.log(bookTitles);

