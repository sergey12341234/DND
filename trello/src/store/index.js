import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CardsReducer } from './reducer';

export const store = createStore(combineReducers({
    cards: CardsReducer,
}), composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => console.log(store.getState()))