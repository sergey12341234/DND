import { GET_CARTS, ADD_ITEM, DELETE_ITEM, SET_ACTIVE_DESK, UPDATE_ARR } from './actions';

const initialState = { data:
    [
        {
            name: 'first', 
            id: 1, 
            items: 
                [
                    { info: 'some text 1', id: 1 },
                    { info: 'some text 4', id: 4 },
                    { info: 'some text 5', id: 5 },
                ]
        },
        {
            name: 'second',
            id: 2, 
            items: 
                [
                    { info: 'some text 2', id: 2 }
                ]
            },
        {
            name: 'third', 
            id: 3, 
            items: 
                [
                    { info: 'some text 3', id: 3 }
                ]
        }
    ]
}

export const CardsReducer = (state = initialState, { type, payload, }) => {
    if(type === GET_CARTS) {
        return state;
    };
    if(type === DELETE_ITEM) {
        return {
            ...state,
            data: payload
        }
    }
    if(type === ADD_ITEM) {
        return {
            ...state,
            data: payload
        }
    }
    if(type === SET_ACTIVE_DESK) {
        return {
            ...state,
            activeDesk: payload
        }
    }
    if(type === UPDATE_ARR ) {
        return {
            ...state,
            data: payload
        }
    }


    return state || {};
}