import React, {useState} from 'react';

export const NewSongForm = ({addSong}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title);
        addSong(title);
        setTitle('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Add New song : </label>
            <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
            <input type="submit" value="add song"/>
        </form>
    )
}

