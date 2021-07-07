class Book {
    constructor(title, genre, author, read, date) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.date = new Date || Date.now();
    }
}

class BookList {
    constructor(book) {
        this.books = [];
        this.books.push(book);
    }

    get markedNotRead () {
        return this.books.filter (book => !book.read);
    }
    
    get currentBook () {
        for (let i = 0; i < this.books.length; ++i) {
          if (!this.books[i].read) {
            return this.books[i];
          }
        }
    }
    
    get nextBook () {
        return this.books[this.books.indexOf (this.currentBook) + 1];
    }
    
    get lastBook () {
        return this.books[this.books.indexOf (this.currentBook) - 1];
    }
    
    get allBooks () {
        return this.books;
    }
    
    add (book) {
        this.books.push(book);
    }
    
    finishCurrentBook () {
        this.currentBook.date = Date.now();
        this.currentBook.read = true;
    }
    
}