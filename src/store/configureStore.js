import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index.js'

const persistConfig = {
  key: 'root',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer,
    {},
    compose(
      applyMiddleware(...[thunk])
    )
  )
  let persistor = persistStore(store)
  return { store, persistor }
}
