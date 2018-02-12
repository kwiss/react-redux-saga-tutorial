import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/root'
import rootSaga from './sagas/index'
import createSagaMiddleware, { END } from 'redux-saga'
import * as actions from './actions/action-example'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware)
const store = createStore(rootReducer, composeEnhancers(middlewares))

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
store.runSaga(rootSaga)

window.store = store

// get set data
console.log('1: we call the first action here in the index.js file')
store.dispatch(actions.initPage())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
