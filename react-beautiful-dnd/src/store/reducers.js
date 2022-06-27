import { INITIAL_STATE } from '../components/Data/initialState';
import { ADD_ITEM, MOVE_ITEM } from './actions'


export const cardsReducer = (state = INITIAL_STATE, { type, payload }) => {
    if(type === MOVE_ITEM) {
        return [
            ...payload
        ]
    }

    if(type === ADD_ITEM) {
        const { item, idSubDesk } = payload
        return {
            ...state,
            [idSubDesk]: [...state[idSubDesk], item]
        }
    }

    return state || {}
}