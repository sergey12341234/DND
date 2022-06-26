import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cardsReducer } from './reducers';

export const store = createStore(combineReducers({
    cards: cardsReducer,
}), composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()))
