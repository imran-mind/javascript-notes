import React from 'react';
import hoc from './hoc';

const About = (props) =>{
    const {label,hocValue} = props;
return(<h2>Component {label} {hocValue}</h2>)
}

export default hoc(About);