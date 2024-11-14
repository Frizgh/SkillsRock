class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = 'available';
  }
}
class Library {
  constructor() {
    this.books = []
  }
  addBook(book) {
    this.books.push(book);
  }
  borrowBook(isbn) {
    const book = this.books.find(item => item.isbn === isbn)
    if (book) {
        if(book.isbn === "available"){
            book.status = 'not available'
            console.log(`The book "${book.title}" has been taken.`)
        } else {
            console.log(`Book "${book.title}" already taken.`);
        }
    }
  }
  returnBook(isbn) {
    const book = this.books.find(item => item.isbn === isbn)
    if (book) {
        if(book.status === 'not available'){
            book.status = 'available'
            console.log(`The book "${book.title}" has been returned.`)
        }
    }
  }
  listAvailableBooks() {
    const booksAvailable = this.books.filter(book => book.status === 'available')
    if(booksAvailable.length < 0) {
        console.log('0 books available')
    } else {
        booksAvailable.forEach(book => console.log(`Title: ${book.title} Author: ${book.author} is available`))
    }
  }
}

const library = new Library()
const book1 = new Book('Random1', 'Author1', '981751')
const book2 = new Book('Random2', 'Author2', '87523021')
const book3 = new Book('Random3', 'Author3', '4562343423')

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)

library.listAvailableBooks()

library.borrowBook('981751')
library.borrowBook('87523021')
library.borrowBook('4562343423')
library.borrowBook('4562343423')

library.returnBook('87523021')

library.listAvailableBooks()

//Возможно что то сделал не совсем правильно,
// с классами работаю 2 раз в жизни после учебного примеру,по которому я собственно и пытался сделать данную задачу