import React,{useContext, useState} from 'react';
import { BookContext } from '../context/BookContext';
import { NewSongForm } from './NewSongForm';

export const SongList = () =>{
    // const [songs ,setSongs] = useState([
    //     {title: 'Sahar Qarib he',id:1},
    //     {title: 'Tarakkiyo ki daud me Tarakkiyo ki daud me Tarakkiyo ki daud me', id:2}
    // ]);

    // const addSong = (title) =>{
    //     setSongs([...songs, {title}]);
    // }
    const {books,addBook} = useContext(BookContext);
    return (
        <div >
            <ul>
                {books.map((song,index)=>{
                    return <li key={index}>{song.title}</li>
                })}
            </ul>
            <NewSongForm addBook = {addBook}/>
        </div>
    )
}