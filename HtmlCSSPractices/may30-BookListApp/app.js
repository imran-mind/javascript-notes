// Book class: Represent a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class: Handle UI Task
class UI {
    static displayBooks() {
        const StoredBooks = Store.getBooks();
        const books = StoredBooks;
        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `
        list.appendChild(row);
    }

    static  showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container= document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div,form);

        //Vanish in 3 seconds
        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000)
    }
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

//Store class: Handles storage 

class Store{
    static getBooks()  {
        let books;
        if(localStorage.getItem('books') === null){
            books=[];
        }else{
            books = JSON.parse(localStorage.getItem('books'))
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    } 
}

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book
const form = document.querySelector('#book-form');

form.addEventListener('submit', (e) => {

    //Prevent actual submit
    e.preventDefault();
    // Get the form values
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();

    //Validate
    if (!title || !author || !isbn) {
        // alert('Please fill in all fields');
        UI.showAlert('Please fill in all fields','danger')
    } else {
        //Instantiate a book
        const newBook = new Book(title, author, isbn);
        //Add Book to UI
        UI.addBookToList(newBook);
 
        //Add Book to store
        Store.addBook(newBook);

        //Show success message
        UI.showAlert('Book Added', 'success');

        //clear fields
        UI.clearFields();
    }
})

//Event: Remove a Book
const bookList = document.querySelector('#book-list');
bookList.addEventListener('click', (e) => {
    //Remove book from UI
    UI.deleteBook(e.target);

    //Remove book from localstorage
    console.log(e.target.parentElement.previousElementSibling)
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    UI.showAlert('Book Deleted ','success');
})

// rocket singh
// 