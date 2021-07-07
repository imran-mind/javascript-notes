import React,{useState,useEffect} from 'react';
import { NewSongForm } from './NewSongForm';
/* 
useMemo
React.memo
useCallback
React.lazy with suspense
what is synthetic event
useEffect
useState
Redux with hooks setup and full understanding
*/
const SongList = React.memo(({songs}) =>{
    useEffect(() => {
        console.log('useEffect for SongList')
    },[])

    return (
        <div className='song-list'>
            {console.log('rendering for songs')}
            <ul>
                {songs.map((song,index)=>{
                    return <li key={index}>{song.title}</li>
                })}
            </ul>
        </div>
    )
},(prevProps,nextProps)=>{
    
})

export default SongList;