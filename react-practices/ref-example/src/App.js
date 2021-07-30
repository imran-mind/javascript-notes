import React, {useRef,useState} from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FindDOMNodeExample from './components/findDOMNodeExample';
import ParentComponent from './components/ParentComponent';
import RefExample from './components/RefExample';

function App() {
 
  return (
    <div className="App">
      {/* <FindDOMNodeExample/> */}
      <ParentComponent/>
      {/* <RefExample/> */}
      {/* <ClassComp/> */}
    </div>
  );
}

export default App;
