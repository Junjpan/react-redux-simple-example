import React, { Component } from 'react';
import './App.css';
import Post from './component/post.js';
import Postform from './component/postform.js'
import {Provider} from 'react-redux';
import store from './store.js';


console.log(store);
/**
     * dispatch: ƒ (action)
       getState: ƒ f()
       liftedStore: {dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
       replaceReducer: ƒ (n)
       subscribe: ƒ subscribe(listener)
       Symbol(observable)
     */

store.getState();     
const unsubscribe=store.subscribe(()=>{
  console.log('store changed!', store.getState());
});
/**
 * store changed! 
 * {allpost: {…}}
 * allpost: 
 * item: {title: "hello", body: "It is a great day!"}
 * items: (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]__proto__: Object__proto__: Object
 */

store.dispatch({
  type:'NEW_POST',
  payload:{
    title:"hello",
    body:"It is a great day!"
  }
})

unsubscribe();//prevent memory leak if you navigate off your current page


// This example only work in chrome browser, to use in other browser, take "compose" out of the store.js
class App extends Component {
  render() {
    return (
     <Provider store={store}>
      <div className="App">
        <Postform />
        <hr />
        <Post />
      </div>
     </Provider>
    );
  }
}

export default App;
