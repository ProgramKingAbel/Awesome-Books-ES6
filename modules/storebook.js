export default class Store {
  static getBooks() {
    const books = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(i) {
    const books = Store.getBooks();
    books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(books));
    document.location.reload();
  }
}
