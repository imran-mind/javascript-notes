import React, { useState,useMemo, useEffect } from "react";

function App() {
  const [count,setCount] = useState(0);
  // const [calculation,setCalculation] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = () =>{
    const copyTodos = [...todos];
    copyTodos.push('New Todo');
    setTodos(copyTodos);
  }

  //useMemo function returns the memoized value
  //useMemo is used for optimizing the app performance, because it memoize the result of the function for the same value
  // in useMemo it takes function as first args and depedency arr as second arg
  // when we pass second parameter arr empty then this useMemo callback func runs only once during rendering time.
  // when we pass second parameter arr with some state then useMemo callback func will runs everytime whenever this state
  // value will changes.
  //when we don't pass second parameter as arr then it this useMemo callback func runs
  //everytime during rerendring phase but not after render but during the rendering process itself
  const calculation = useMemo(()=> expensiveCalculation(count), [count]);

  const increment = ()=>{
    setCount((c)=> c + 1);
  }
  
  return (
    <div className="App">
        {/* Todos section  */}
        <div>
          <h2>Todos</h2>
          {
            todos.map((todo, index)=>{
              return <p key={index}>{todo}</p>
            })
          }
          <button onClick={addTodo}>Add Todo</button>
        </div>
        {/* count section */}
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive calculation</h2>
          {calculation}
        </div>
    </div>
  );
}

const expensiveCalculation = (num)=>{
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}

export default App;
