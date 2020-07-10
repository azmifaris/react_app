import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Home, About, Users  } from './views' ;
import News from './views/News';
import List from './views/List';
import './App.css';


function App() {
  return (
    <Router>
     <div className="App">
      <header className="App-header">
          <z><Link to="/">Home</Link></z>
          <z><Link to="/news">Materi</Link></z>
          <z> <Link to="/topics">Aplikasi</Link></z>
          <z><Link to="/list">List Produk</Link></z>
          <z> <Link to="/about">About</Link></z>
      {/* route */}
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/topics">
          <Users />
        </Route>
        <Route path = "/news">
          <News></News>
        </Route>
        <Route path = "/list">
          <List />
        </Route>
        
      </Switch>
      </header>
      
      
      
 
    
    
    </div> 
    
       </Router>  
    
  );
}

export default App;
