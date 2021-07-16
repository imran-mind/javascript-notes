import React from 'react';
import hoc from './hoc';

const Home = (props) =>{
    const {label,hocValue} = props;
    return(
        <div>
            <h2>Component {label} {hocValue}</h2>
            <ul className="no-bullets">
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
            </ul>
        </div>
    )
}

export default hoc(Home);