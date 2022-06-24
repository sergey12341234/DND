import { GET_CARTS, ADD_ITEM, DELETE_ITEM, SET_ACTIVE_DESK, SET_NEW_ARR } from './actions';

const initialState = { data:
    [
        {name: 'first', items: 
            [
                {info: 'some text 1'},
                {info: 'some text 4'},
                {info: 'some text 5'},
            ]
        },
        {name: 'second', items: 
            [
                {info: 'some text 2'}
            ]
        },
        {name: 'third', items: 
            [
                {info: 'some text 3'}
            ]
        }
    ]
}

export const CardsReducer = (state = initialState, { type, payload, }) => {
    if(type === GET_CARTS) {
        return {...state};
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
    if(type === SET_NEW_ARR) {
        return {
            ...state,
            data: payload
        }
    }

    return state || {};
}