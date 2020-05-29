import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme'
import ThemeContextProvide from './context/ThemeContext';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvide>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme/>
        </AuthContextProvider>
      </ThemeContextProvide>
    </div>
  );
}

export default App;
