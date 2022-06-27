import { MOVE_ITEM } from '../store/actions';

const findInArr = (arr, source, destination) => {
    let sourceColumn, destColumn;
    arr.map(item => {
        if(item.id === source) sourceColumn = item
        if(item.id === destination) destColumn = item
    })
    return {sourceColumn, destColumn}
}

export const changeArrWhenItemIsMove = (payload,getState) => {
    const { source, destination } = payload;
        const {sourceColumn, destColumn} = findInArr(getState.cards,source.droppableId, destination.droppableId)
        if(source.droppableId !== destination.droppableId) {
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            const newState = getState.cards.map(item => {
                if(item.id === source.droppableId) {
                    return {
                        ...item,
                        items: sourceItems
                    }
                }
                if(item.id === destination?.droppableId) {
                    return {
                        ...item,
                        items: destItems
                    }
                }
                return item
            })
            return {
                type: MOVE_ITEM,
                payload: [...newState]
            }
        } else {
            const copiedItems = [...sourceColumn.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            const newState = getState.cards.map(item => {
                if(item.id === source.droppableId) {
                    return {
                        ...item,
                        items: copiedItems
                    }
                }
                return item
            })
            return {
                type: MOVE_ITEM,
                payload: [...newState]
            }
        }
}