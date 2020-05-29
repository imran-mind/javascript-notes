import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvide extends React.Component{
    state={
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
    }

    toggleTheme = () =>{
        this.setState({isLightTheme: !this.state.isLightTheme});
    }
    render(){
        return(
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {console.log('********',this.props.children)}
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvide;