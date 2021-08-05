import '../index.css';
import Head from 'next/head';
import Store,{ initialState } from '../store/context';
import { useReducer,useContext } from 'react';
import { reducer } from '../store/reducer';
import wrapper from '../store/configureStore';

const App = ({Component}) => {
    const globalContext = useContext(Store);
    const [state,dispatch] = useReducer(reducer,globalContext);

    return(
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet" />
            </Head>
            <Store.Provider value={{state,dispatch}}>
                <Component /> {/* 우리가 만든 모든 파일이 여기에 위치 */}
            </Store.Provider>
        </>
    )
}


export default wrapper.withRedux(App);