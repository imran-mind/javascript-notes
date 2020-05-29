import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

// class ToggleTheme extends React.Component{
//     static contextType = ThemeContext;
     
//     render(){
//         const {toggleTheme} = this.context;
//         return(
//             <button onClick={toggleTheme}>Toggle The Theme</button>
//         )
//     }
// }


const ToggleTheme = () =>{
    const {toggleTheme} = useContext(ThemeContext);
    return(
        <button onClick={toggleTheme}>Toggle The Theme</button>
    )
}

export default ToggleTheme;