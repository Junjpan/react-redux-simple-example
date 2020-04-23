import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducer';


const initialState={};

const middleWare=[thunk];


const store=createStore(
    rootreducer,
    initialState,
    compose(// implement redux's devtools for chrome
    applyMiddleware(...middleWare),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);

export default store;