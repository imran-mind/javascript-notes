import React,{useState} from 'react';
import UpdatedComponent from './UpdatedComponent';

//file name: components/ClickIncrease.js
function ClickIncrease(props) {
    // const [fontSize, setFontSize] = useState(10); //set initial value of Hook to 10.
    const { counter, incrementCounter } = props; 

    return (
        <div>
            {/*When clicked, increment the value of fontSize*/}
            <button onClick={() => incrementCounter((size) => size + 1)}>
                Increase with click
            </button>
            {/*Set the font size of this text to the fontSize variable.*/}
            {/*Furthermore, display its value as well.*/}
            <p style={{ fontSize: counter }}>
                Size of font in onClick function: {counter}
            </p>
            <p>
                Value of 'name' in ClickIncrease: {props.name}
            </p>
        </div>
    );
}
export default UpdatedComponent(ClickIncrease);