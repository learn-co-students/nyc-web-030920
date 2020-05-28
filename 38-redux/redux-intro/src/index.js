import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import { reducer } from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let store = createStore(reducer)

// PART TWO - JUST REDUX - REFERENCE
// console.log('storeio', store)
// console.log('get store', store.getState())
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'LIKE'})
// store.dispatch({type: 'DISLIKE'})
// store.dispatch({type: 'TOGGLE'})
// store.dispatch({type: 'ADD_TEXT'})
// store.dispatch({type: 'HANDLE_CHANGE', payload: {value: 'some string here thatll get added'}})
// console.log('get store', store.getState())




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
