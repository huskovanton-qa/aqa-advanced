import { Book } from './Book.mjs';
import { EBook } from './EBook.mjs';

// Test cases for Book class
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book3 = new Book('1984', 'George Orwell', 1949);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Test case for static method findOldestBook
const books = [book1, book2, book3];
const oldestBook = Book.findOldestBook(books);
oldestBook.printInfo();

// Test case for getters and setters
const ebook1 = new EBook(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  1925,
  'PDF'
);

ebook1.printInfo();

ebook1.fileFormat = 'EPUB';

ebook1.printInfo();

// Test case for static method createEBookFromBook
const ebook2 = EBook.createEBookFromBook(book2, 'MOBI');
ebook2.printInfo();
