import React,{useState} from 'react';
import { NewSongForm } from './NewSongForm';

export const SongList = () =>{
    const [songs ,setSongs] = useState([
        {title: 'Sahar Qarib he',id:1},
        {title: 'Tarakkiyo ki daud me Tarakkiyo ki daud me Tarakkiyo ki daud me', id:2}
    ]);

    const addSong = (title) =>{
        setSongs([...songs, {title}]);
    }
    return (
        <div className='song-list'>
            <ul>
                {songs.map((song,index)=>{
                    return <li key={index}>{song.title}</li>
                })}
            </ul>
            <NewSongForm addSong = {addSong}/>
        </div>
    )
}