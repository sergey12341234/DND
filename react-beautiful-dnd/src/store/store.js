// import { composeWithDevTools } from '@redux-devtools/extension';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { cardsReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice'

export default configureStore ({
    reducer: {
        cards: cardsReducer
    } 
})




























// export const store = createStore(combineReducers({
    //     cards: cardsReducer,
// }), composeWithDevTools(applyMiddleware(thunk)));
// store.subscribe(() => console.log(store.getState()))