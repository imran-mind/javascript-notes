// Book Class for Instantiating a Book Object
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI class for making operations create ,delete, update, show alerts
class UI {

    static displayBooks(){
        const books = Store.getBooks();
        if(books){
            books.forEach(book => {
                this.addBookList(book);
            });
        }
    }

    static addBookList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            </tr>
        `;
        list.appendChild(row);
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className= `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000)
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// Store class : Handle storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = []
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static storeBook(book) {
        let books = this.getBooks();
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
//Event: show list of books
document.addEventListener('DOMContentLoaded',UI.displayBooks());

//Event: Add Book
const form = document.querySelector('#book-form');

form.addEventListener('submit',(e)=>{
    //Prevent default behaviour of the browser
    e.preventDefault();

    //Get the form values;
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#title').value.trim();
    const isbn = document.querySelector('#title').value.trim();

    if(!title || !author || !isbn){
        UI.showAlert('Please fill in all fields','danger');
    }else{
        const book = new Book(title,author,isbn);
        console.log(book)
        //Add a Book to UI
        UI.addBookList(book);

        //Add Book to store
        Store.storeBook(book);

        //Show success alert
        UI.showAlert('Book Added Successfully ','success');

        //clear fields
        UI.clearFields();
    }
});

//Event: Remove Book
const bookList = document.querySelector('#book-list');

bookList.addEventListener('click',(e)=>{

    //Delete book from dom
    UI.deleteBook(e.target);

    //Remove book from localstorage
    Store.removeBook(e.target.parentElement.parentElement.textContent);

    //Show Delete alerts
    UI.showAlert('Book Deleted ','danger');
})

//