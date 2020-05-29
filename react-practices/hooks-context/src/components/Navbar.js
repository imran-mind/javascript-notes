import React,{useContext} from 'react';
import { BookContext } from '../context/BookContext';


const Navbar = () =>{
    const {books} = useContext(BookContext)

    return (
        <div className="navbar">
            <h1>Ninja Reading</h1>
            <p>Currently you have {books.length} books to get through</p>
        </div>
    )
}

export default Navbar;