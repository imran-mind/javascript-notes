import React, {useState} from 'react';

export const NewSongForm = ({addBook}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addBook(title);
        setTitle('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Add New Book : </label>
            <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" value="add books"/>
        </form>
    )
}

