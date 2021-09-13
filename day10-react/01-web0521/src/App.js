import React from 'react'
import {Provider} from 'react-redux'
import WithList from './constainer/WithList'
import store from './redux/store'
export default function App() {
    return (
        <Provider store={store}>
               <WithList></WithList>
        </Provider>
    )
}
