import React from 'react'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'
import reducer from './reducers'
import App from './App'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
)