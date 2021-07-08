import React from 'react';
import { SongList } from './components/SongList';
import BookContextProvider from './context/BookContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <SongList/>
    </div>
  );
}

export default App;
