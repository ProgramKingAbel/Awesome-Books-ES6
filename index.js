import Book from './modules/book.js';
import library from './modules/library.js';
import Store from './modules/storebook.js';
import { DateTime } from './modules/luxon.js';
// Time code
const currentTime = document.querySelector('.current-time');
const dateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
currentTime.innerHTML = dateTime;

const goToSection = (i) => {
  const contents = document.getElementsByTagName('section');
  for (let x = 0; x < contents.length; x += 1) {
    if (i !== x) {
      contents[x].classList.add('active');
    } else {
      contents[x].classList.remove('active');
    }
  }
};

// navigation to display specific sections of the page
const disappear = () => {
  const links = document.querySelectorAll('.menu-link');
  links.forEach((lk, i) => {
    lk.addEventListener('click', () => {
      goToSection(i);
    });
  });
};

// Event to display books
document.addEventListener('DOMContentLoaded', library.showBooks);
// Event to add a book
document.querySelector('#add-book').addEventListener('submit', (e) => {
  // prevent Default
  e.preventDefault();

  // get values

  const id = Date.now();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (id && title && author) {
    // create an instance of class book

    const book = new Book(id, title, author);
    library.addBook(book);

    // add book to store
    Store.addBook(book);
    library.clearInput();
  }
});

// Event to call a function to remove a book
const activateDelete = () => {
  const remove = document.querySelectorAll('.remove');

  remove.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      Store.removeBook(i);
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  activateDelete();
  disappear();
});
