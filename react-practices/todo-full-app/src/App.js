import './App.css';
import Header from './Components/Header/Header';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="app">
       <Header/>
        <Input/>
        <TodoList/>
    </div>
  );
}

export default App;
