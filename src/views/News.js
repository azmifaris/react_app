import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from 'react-router-dom';
  import Javascript from './javascript';
  import PHP from './PHP';
  import C from './c';

export default function News(){
    const history = useHistory();
    let match = useRouteMatch();
    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth')
    }, [])
    console.log(match)
    return(
        <div className="App">
            <header className="App-header">
                    <h1>Materi</h1>
                    <ul>
                    <li><Link to={match.url+'/javascript'}>Java Script</Link></li>
                    <li><Link to={match.url+'/PHP'}>PHP</Link></li>
                    <li><Link to={match.url+'/C++'}>C++</Link></li>
                    </ul>
            </header>
            <Switch>
                    <Route  path ={match.url+'/javascript'}>
                        <center><Javascript/></center>
                    </Route>
                    <Route  path ={match.url+'/PHP'}>
                        <center><PHP /></center>
                    </Route>
                    <Route  path ={match.url+'/C++'}>
                        <center><C /></center>
                    </Route>
                </Switch>
        </div> 
    )
}