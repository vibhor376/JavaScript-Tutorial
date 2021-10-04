//Create a class library and implement the following
// 1) getBookList()
// 2) issueBook(bookName, user)
// 3) returnBook(bookName)


let books = [];

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBooksList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }
    issueBook(bookName, user) {
        if (this.issuedBooks[bookName] == undefined) {
            console.log(`${user} issued book named ${bookName}`)
            this.issuedBooks[bookName] = user;
        } else {
            console.log(`sorry, this is book is already issued! try issuing any other book ${user}.`);
        }
    }
    returnBook(bookName) {
        delete this.issuedBooks[bookName];
    }
    issuedBooksList() {
        console.log(this.issuedBooks);
    }
}
let vibhorLib = new Library(['To Kill a Mockingbird', 'The Great Gatsby', 'One Hundred Years of Solitude', 'A Passage to India', 'Invisible Man', 'Don Quixote', 'Beloved', 'Things Fall Apart', 'Jane Eyre']);
// console.log(vibhorLib);
// console.log(vibhorLib.getBooksList());
vibhorLib.issueBook('Things Fall Apart', 'naman');
vibhorLib.issueBook('Beloved', 'abhay');
vibhorLib.issueBook('Invisible Man', 'vaibhav');
vibhorLib.issueBook('Things Fall Apart', 'avirat');
vibhorLib.returnBook('Things Fall Apart');
vibhorLib.issueBook('Things Fall Apart', 'avirat');
console.log(vibhorLib.issuedBooksList());
