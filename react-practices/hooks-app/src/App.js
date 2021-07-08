import React,{useState,lazy,Suspense} from 'react';
// import MyComp from './myComp';
// import SongList from './components/SongList';

// React.lazy() returns promise
const SongList = lazy(()=>import('./components/SongList')); 
// const MyComp = lazy(()=>import('./myComp'));
function App() {
  const [count,setCount] = useState(0);
  const [title, setTitle] = useState('');

  const [songs ,setSongs] = useState([
      {title: 'Sahar Qarib he',id:1},
      {title: 'Tarakkiyo ki daud', id:2}
  ]);
  
  const addSong = (title,e) =>{
    e.preventDefault()
    setSongs([...songs,{title}]);
  }
  
  return (
    <div className="App" style={{margin:'50px'}}>
      {count}
      <button onClick={()=>setCount(count+1)}>Count </button>
      <form onSubmit={(e)=>addSong(title,e)}>
          <label>Add New song : </label>
          <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}/>
          <input type="submit" value="add song"/>
      </form>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <MyComp/>
      </Suspense> */}
      {count > 0 ? (<Suspense fallback={<div>Loading...</div>}>
        <SongList songs={songs}/>
       </Suspense>) : null}
    </div>
  );
}

export default App;
