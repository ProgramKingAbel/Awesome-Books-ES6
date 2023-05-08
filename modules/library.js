import Store from './storebook.js';

export default class library {
  static showBooks() {
    const books = Store.getBooks();
    books.forEach((book) => library.addBook(book));
  }

  static addBook(book) {
    const allBooks = document.querySelector('.all-books');
    const newBook = document.createElement('div');
    newBook.classList = 'book';

    newBook.innerHTML = `
        
        <p class="title">"${book.title}" by <span></span>${book.author}</p>
        <button class="remove">Remove</button>
      
        `;

    allBooks.append(newBook);
  }

  static clearInput() {
    document.querySelector('form').reset();
  }
}
