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
        ++this.NumOfread;
        --this.NumOfNotread;
        this.currentBook.readDate = Date.now();
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;

        this.nextBook = null;
        for(let book of this.allBooks) {
            if(!book.read && book !== this.currentBook){
                this.nextBook = book;
                break;
            }
        }

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
let b1 = new Book("book01", "damn", "sdf", true, Date.now());
let b2 = new Book("book02", "damn", "asd", false);
let b3 = new Book("book03", "damn", "qwe", true, Date.now());
let b4 = new Book("book04", "damn", "rwerwe", false);
let b5 = new Book("book05", "damn", "vxcv", true, Date.now());
let b6 = new Book("book06", "damn", "ccc", false);
let b7 = new Book("book07", "damn", "xxx", true, Date.now());
let b8 = new Book("book08", "damn", "vvv", true, Date.now());
let b9 = new Book("book09", "damn", "ggg", false);
let b10 = new Book("book10", "amn", "hhh", false);
let b11 = new Book("book11", "damn", "jjj", true, Date.now());
let b12 = new Book("book12", "damn", "yyy", false);

let b13 = new Book("yyy", "damn", "yyy", false, Date.now());


let arr = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12]

let list = new BookList(arr, b2 , b4, b1);
// console.log(list)

// console.log(list.add(b13));

console.log(list.finishCurrentBook());

