import React,{useState} from 'react';
import { SongList } from './components/SongList';

function App() {
  const [count,setCount] = useState(0);
  const [title, setTitle] = useState('');

  const [songs ,setSongs] = useState([
      {title: 'Sahar Qarib he',id:1},
      {title: 'Tarakkiyo ki daud', id:2}
  ]);
  
  const addSong = (title,e) =>{
    e.preventDefault()
    setSongs([...songs]);
  }
  return (
    <div className="App">
      {count}
      <button onClick={()=>setCount(count+1)}>Count </button>
      <form onSubmit={(e)=>addSong(title,e)}>
          <label>Add New song : </label>
          <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
          <input type="submit" value="add song"/>
      </form> 
      <SongList songs={songs}/>
    </div>
  );
}

export default App;
