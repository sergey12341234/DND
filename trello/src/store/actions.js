export const GET_CARTS = "GET_CARTS";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_ITEM = "ADD_ITEM";
export const SET_ACTIVE_DESK = "SET_ACTIVE_DESK";

export const actionSetActiveDesk = (payload) => ({ type: SET_ACTIVE_DESK, payload })

const ArrToDelete = (state,arrFromRemove,data) => {
    const filtered = state().cards.data.map(item => {
        if(item.name === arrFromRemove) {
            const newArr = item.items.filter(node => node.info !== data)
            return { ...item, items: newArr }
        }
        return item
    })
        return { type: DELETE_ITEM, payload: filtered }
}

const addToArr = (state,arrToAdd, data) => {
    const filtered = state().cards.data.map(item => {
        if(item.name === arrToAdd) {
            return { ...item, items:  [...item.items, data] }
        }
        return item
    })
        return { type: ADD_ITEM, payload: filtered }
}

export const actionGetCarts = () => ({ type: GET_CARTS })
// export const actionDeleteFromArr = (data,arrToRemove) => {
//     return (dispatch,getState) =>  {
//         dispatch(ArrToDelete(getState,arrToRemove,data))
//     }
// }

export const actionAddToArr = (data,arrToAdd,arrToRemove) => {
    return (dispatch,getState) =>  {
        dispatch(ArrToDelete(getState,arrToRemove,data))
        dispatch(addToArr(getState,arrToAdd,data))
    }
}