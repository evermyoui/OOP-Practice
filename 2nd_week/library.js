class Book {
    static idCounter = 1;
    constructor(title, author, datePublished, stock){
        this.title = title;
        this.author = author;
        this.datePublished = datePublished;
        this.stock = stock;
        this.id = `BOOK-${String(Book.idCounter).padStart(4, "0")}`;
        Book.idCounter++;
    }
}
class Library {
    constructor(books){
        this.books = books;
    }
    borrowBook(user, id, quantity, date){
        const book = this.books.find(item => item.id === id);
        if (!book){
            console.log("No such book");
            return;
        }
        if (book.stock < quantity){
            console.log("Not enough stock.");
            return;
        }
        if (book.stock === 0){
            console.log("No stock.");
            return;
        }
        book.stock-=quantity;
        user.borrowedBooks.push({
            id: book.id,
            book,
            date,
            quantity
        });
        console.log("Successfully Borrowed.");
    }
    showAvailableBooks(){
        this.books.forEach(item => {
            console.log(`${item.title} by ${item.author} (${item.datePublished}) | stock: ${item.stock}`);
        });
    }
    returnBook(user, id){
        const book = this.books.find(item => item.id === id);
        const index = this.books.findIndex(item => item.id === id);
        if (!book){
            console.log('You no borrow that book.');
            return;
        }
        user.borrowedBooks.splice(index, 1);
        book.stock+= user.borrowedBooks[index].quantity;
    }
}
class User {
    constructor(user){
        this.user = user;
        this.borrowedBooks = [];
    }
    showBorrowBooks(){
        this.borrowedBooks.forEach(item => {
            console.log(`${item.id} | ${item.book.title} by ${item.book.author} (${item.book.datePublished}) | date: ${item.date}`);
        });
    }
}
// Sample usage
const book1 = new Book ("Unfuck Yourself", "Gary John Bishop", 2016, 5);
const book2 = new Book ("The Power of Habit", "Charles Duhigg", 2012, 2);

const library = new Library([book1, book2]);
const user = new User("Juan");

library.borrowBook(user, book1.id, 1, "9-16-25");
library.borrowBook(user, book1.id, 1, "10-02-25");

console.log("\nBorrowed Books:");
user.showBorrowBooks();

console.log("\nAvailable Books:");
library.showAvailableBooks();

library.returnBook(user, user.borrowedBooks[0].id);

console.log("\nAfter Return:");
user.showBorrowBooks();
library.showAvailableBooks();