import React from 'react'
import ReactDOM from 'react-dom'
import 'materialize-css/dist/css/materialize.min.css'
import './index.css'
import App from './App'
import reducer from './redux/reducers'
import middleware from './redux/middleware'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
