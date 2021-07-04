import React,{useState,useEffect} from 'react';
import { NewSongForm } from './NewSongForm';
/* 
useMemo
React.memo
useCallback
what is synthetic event
useEffect
useState
Redux with hooks setup and full understanding
*/
export const SongList = () =>{
    const [count,setCount] = useState(0);
    const [songs ,setSongs] = useState([
        {title: 'Sahar Qarib he',id:1},
        {title: 'Tarakkiyo ki daud me Tarakkiyo ki daud me Tarakkiyo ki daud me', id:2}
    ]);

    useEffect(() => {
        console.log('useEffect')
    },[songs])

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
            {count}
            <button onClick={()=>setCount(count+1)}>Count </button>
        </div>
    )
}