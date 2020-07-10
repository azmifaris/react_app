//import library yang dibutuhkan
import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from 'react-router-dom';
import Counter from './Counters';
import Todos from './Todo';
import Waktu from './Waktu';
import Berat from './Berat';

export default function Topics(){
    //menyimpan route match ke dalam variabel match
    let match = useRouteMatch();
    //otomatis scroll kebagian aplikasi
    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth')
    }, [])
    return(
        <div className="App">
            <div className="App">
                <header className="App-header">
                    <h1>Pilih Aplikasi</h1>
                    <ul>
                    <li><Link to={match.url+'/counter'}>Counter</Link></li>
                    <li><Link to={match.url+'/todo'}>Todo list</Link></li>
                    <li><Link to={match.url+'/waktu'}>Converter Waktu</Link></li>
                    <li><Link to={match.url+'/berat'}>Converter Berat</Link></li>
                    </ul>
                </header>
                {/* route dari masing masing aplikasi */}
                <Switch>
                    <Route  path ={match.url+'/counter'}>
                        <center><Counter/></center>
                    </Route>
                    <Route  path ={match.url+'/todo'}>
                        <center><Todos /></center>
                    </Route>
                    <Route  path ={match.url+'/waktu'}>
                        <center><Waktu/></center>
                    </Route>
                    <Route  path ={match.url+'/berat'}>
                        <center><Berat /></center>
                    </Route>
                    
                </Switch>
            </div> 
                        
        </div> 
    )
}