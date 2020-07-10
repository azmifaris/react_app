import React from 'react';
import { ThemeContext } from './components/themeContext';
import Home from './views/Home';
import './App.css';


class App extends React.Component{
    constructor(){
        super(); 
        this.onChangeTheme = () => {
            this.setState(prevState =>({
                colorTheme : prevState.colorTheme === 'dark' ? 'white' : 'dark' ,
            }))
            
        }
        
                    
               
        
    this.state = {
        colorTheme: 'dark',
        onChangeTheme : this.onChangeTheme,


    } 
    }
    render(){
        return(
            <ThemeContext.Provider value={this.state}>
                <Home />
            </ThemeContext.Provider>
        )
    }
    
}
export default App;