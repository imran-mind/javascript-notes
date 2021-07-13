import React, {useRef,useState} from 'react';
import './App.css';

function App() {
  const myRef = useRef(null);
  const [show,setShow] = useState(false);
  const formSubmit = (e) =>{
    e.preventDefault();
    console.log(myRef.current.value)
    setShow(true);
  }
  return (
    <div className="App">
      <h2>Uncontrolled component example with ref</h2>

      <form onSubmit={formSubmit}>
        <input type="text" ref={myRef}/>
        <button>Submit</button>
      </form>
      {show ? <h2>You submitted {myRef?.current?.value}</h2> :null}
    </div>
  );
}

export default App;
