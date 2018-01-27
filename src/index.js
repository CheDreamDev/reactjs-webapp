import React from 'react'
import ReactDOM from 'react-dom'

// components
import AppContainer from './components/AppContainer'

// redux
import { Provider } from 'react-redux'

// persist
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './store/configureStore'
let { store, persistor } = configureStore()

// sync store with storage
ReactDOM.render(
  (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  ),
  document.getElementById('root')
)
