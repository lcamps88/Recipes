import {createStore,compose,combineReducers,applyMiddleware} from 'redux'
import ReducerRecipe from './Foodreducer'
import ShopReducer from './ShopReducer'
import thunk from 'redux-thunk'
import {loadState,saveState} from './data/localStorage'


const persistedState = loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  recipes: ReducerRecipe,
  shop: ShopReducer
})

const store = createStore(rootReducer,persistedState, composeEnhancers( applyMiddleware(thunk) ))

store.subscribe(() => {
  saveState(store.getState());
});

export default store

