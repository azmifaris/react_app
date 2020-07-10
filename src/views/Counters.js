import React, { useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAsync, decrementAsync } from '../actions';
import '../App.css';

//fungsi counter
export default function Counter(){
    useEffect(() => {
        window.scrollTo(0, window.innerHeight, 'smooth')
    }, [])
    //deklarasi variabel dispatch
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    //deklarasi variabel untuk penambahan angka
    const _add = () => {
      dispatch(incrementAsync());
    }
  //deklarasi variabel untuk pengurangan angka
    const _substract = () => {
      dispatch(decrementAsync());
    }
  
    return (
      <div className="center">
        <div>Counter: {counter}</div>
        <div >
          <button style={{ width: 100 }} onClick={_substract}>Substract</button>
          <button style={{ width: 100 }} onClick={_add}>Add</button>
        </div>
      </div>
    );
}