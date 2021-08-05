import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from 'redux';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = ({ dispatch, getState}) => (next) => (action) => {
    console.log('action : ',action);
    // console.log('dispatch : ',dispatch);
    // console.log('getState : ',getState);
    return next(action);
}

const configureStore = () => {
    const middlewares = [loggerMiddleware,thunkMiddleware]
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))

    const Store = createStore(reducer,enhancer)
    return Store;
}

// 첫 번째 인자값, Store를 담고 있는 함수 === const configureStore
// 두 번째 인자값, 
const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV === 'development'
}) // <Store.Provider></Store.Provider>

export default wrapper;