// ## An object-oriented book-list!


class BookList {
    constructor(allBooks, nextBook, currentBook, lastBook) {
        this.allBooks = allBooks
        this.NumOfread = allBooks.reduce((acc,cur) => {
            return cur.read? ++acc : acc;
        },0);
        this.NumOfNotread = allBooks.reduce((acc,cur) => {
            return cur.read? acc : ++acc;
        },0);
        this.nextBook = nextBook;
        this.currentBook = currentBook;
        this.lastBook = lastBook;
    }
    add(book) {
        this.allBooks.push(book);
        book.read ? ++this.NumOfread : ++this.NumOfNotread;

        return this.allBooks;
    }
    finishCurrentBook() {
        this.currentBook.read = true;
        this.currentBook.readDate = Date.now();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        this.allBooks.some(book => {
            if(!(book.read || book === this.currentBook)) {
                this.nextBook = book;
            } 
            return (!(book.read || book === this.currentBook));
        });

        return {last: this.lastBook, curr: this.currentBook, next: this.nextBook};
    }
}

class Book {
    constructor(title, genre, author, read = false, readDate){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.read = read;
        this.readDate = readDate;
    }
}

// Test cases
let b1 = new Book("asd", "damn", "sdf", true, Date.now());
let b2 = new Book("zxc", "damn", "asd", false, Date.now());
let b3 = new Book("zxczx", "damn", "qwe", true, Date.now());
let b4 = new Book("asd", "damn", "rwerwe", false, Date.now());
let b5 = new Book("fgh", "damn", "vxcv", true, Date.now());
let b6 = new Book("ccc", "damn", "ccc", false, Date.now());
let b7 = new Book("xxx", "damn", "xxx", true, Date.now());
let b8 = new Book("vvv", "damn", "vvv", true, Date.now());
let b9 = new Book("ggg", "damn", "ggg", false, Date.now());
let b10 = new Book("hhh", "damn", "hhh", false, Date.now());
let b11 = new Book("jjj", "damn", "jjj", true, Date.now());
let b12 = new Book("yyy", "damn", "yyy", false, Date.now());

let b13 = new Book("yyy", "damn", "yyy", false, Date.now());


let arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12]

let list = new BookList(arr, b2 , b4, b1);
// console.log(list)

// console.log(list.add(b13));

console.log(list.finishCurrentBook());

