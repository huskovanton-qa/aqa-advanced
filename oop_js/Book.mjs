export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };

    get title() {
        return this._title;
    };

    get author() {
        return this._author;
    };

    get year() {
        return this._year;
    }; 

    set title(value) {
        if (typeof value === "string") {
            this._title = value;
        };
    };

    set author(value) {
        if (typeof value === "string") {
            this._author = value;
        };
    };

    set year(value) {
        if (typeof value === "number") {
            this._year = value;
        };
    };

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    };

    static findOldestBook(books) {
        let oldestBook = books[0];
        for (let book of books) {
            if (book.year < oldestBook.year) {
                oldestBook = book;
            };
        };
        return oldestBook;
    }
}

