class Library {
    constructor(books){
        this.books = books;
    }
    borrowBook(user, title, quantity, date){
        const book = this.books.find(item => item.title === title);
        if (!book) return "No results."
        if (book.stock < quantity) return "Not enough stock"
        book.stock -= quantity;
        user.borrowedBooks.push({book, date, quantity });
    }
    showAvailableBooks(){
        this.books.forEach(item =>{
            console.log(`${item.id} | ${item.title} by ${item.author} (${item.datePublished}) | stock: ${item.stock}`);
        });
    }
    returnBook(user, title, id){
        const index = this.books.findIndex(item => item.title === title);
            if (index !== -1){
                const borrowedBook = user.borrowedBooks[index];
                borrowedBook.book.stock += borrowedBook.quantity;
                this.books.filter(item => item.id !== id);
            }
            else {
                console.log("No return books");
            }
    }
}
class User {
    constructor(name){
        this.name = name;
        this.borrowedBooks = [];
    }
    showBorrowBooks(){
        if (this.borrowedBooks.length ===0) return "No Books."
        this.borrowedBooks.forEach((item)=>{
            console.log(`${item.book.id} | x${item.quantity} ${item.book.title} by ${item.book.author} (${item.book.datePublished}) Borrowed Date: ${item.date}`);
        });
    }
}
class Book {
    static idCounter = 1;
    constructor(title, author, datePublished, stock){
        this.id = `BOOK-${String(Book.idCounter).padStart(4,"0")}`;
        Book.idCounter++;
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
        this.stock = stock;
    }
}

const book1 = new Book ("Unfuck Yourself", "Gary John Bishop", 2016, 5);
const book2 = new Book ("The Power of Habit", "Charles Duhigg", 2012, 2);

const library = new Library([book1,book2]);
const user = new User("Juan");

library.borrowBook(user, book1.title, 1, "9-16-25");
library.borrowBook(user, book1.title, 1, "10-02-25");
// console.log(user);
// library.showAvailableBooks();
user.showBorrowBooks();
library.returnBook(user, book1.title);
// library.showAvailableBooks();
user.showBorrowBooks();