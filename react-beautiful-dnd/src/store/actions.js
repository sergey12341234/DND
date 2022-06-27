import { changeArrWhenItemIsMove } from '../tools/tools'

export const MOVE_ITEM = 'MOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'

export const actionAddItem = (item) => ({ type: ADD_ITEM, payload: item })
export const actionMoveItem = (result) => {
    return async (dispatch,getState) => { 
        await dispatch(changeArrWhenItemIsMove(result, getState() ))
    }
}