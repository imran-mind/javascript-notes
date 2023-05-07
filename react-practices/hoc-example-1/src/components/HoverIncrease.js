import React,{useState} from 'react';
import UpdatedComponent from './UpdatedComponent';

function HoverIncrease(props) {
    // const [fontSize, setFontSize] = useState(10);
    const { counter, incrementCounter } = props; 
    return (
      <div>
        {/*This time, instead of listening to clicks,*/}
        {/*Listen to hover events instead*/}
        <button onMouseOver={() => incrementCounter((size) => size + 1)}>
          Increase on hover
        </button>
        <p style={{  fontSize: counter }}>
          Size of font in onMouseOver function: {counter}
        </p>
        <p>
           Value of 'name' in HoverIncrease: {props.name}
        </p>
      </div>
    );
  }
  export default UpdatedComponent(HoverIncrease);