import React, {createContext, useState} from 'react';


export const BookContext = createContext();

const BookContextProvider = (props) =>{
    const [books,setBooks]   = useState([
        {title:'The Power of Subconciouse mind', author: "David Murphy", id:1},
        {title:'How to win freinds and influence people',author: "David Murphy", id:2},
        {title:'You can win',author: "Shiv Khera", id:3},
        {title:'You are the champion', author: "Imran Shaikh",id:4}
    ]);

    const addBook = (title,author) =>{
        setBooks([...books,{title,author}]);
    }

    const removeBook = (id) =>{
        setBooks(books.filter((book)=> book.id !== id));
    }

    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;