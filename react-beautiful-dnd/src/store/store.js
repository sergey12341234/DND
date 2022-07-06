
import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';

export default configureStore ({
    reducer: {
        cards: cardsReducer
    } 
});




























// export const store = createStore(combineReducers({
    //     cards: cardsReducer,
// }), composeWithDevTools(applyMiddleware(thunk)));
// store.subscribe(() => console.log(store.getState()))