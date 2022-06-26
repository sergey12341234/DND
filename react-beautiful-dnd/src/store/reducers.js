import uuid from 'uuid/v4'
import { MOVE_ITEM } from './actions'

const itemsFromBackend = [
    { id:uuid(), content: '1 tusk' },
    { id:uuid(), content: '2 tusk' },
    { id:uuid(), content: '3 tusk' },
    { id:uuid(), content: '4 tusk' }
]

const ColumnsFromBackEnd = {
    [uuid()]: {
        content: 'first',
        items: itemsFromBackend
    },
    [uuid()]: {
        content: 'second',
        items: []
    },
    [uuid()]: {
        content: 'third',
        items: []
    },
}







export const cardsReducer = (state = ColumnsFromBackEnd, { type, payload }) => {
    if(type === MOVE_ITEM) {
        const { source, destination } = payload;
        if(source.droppableId !== destination.droppableId) {
            const sourceColumn = state[source.droppableId];
            const destColumn = state[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            return {
                ...state,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            }
        } else {
            const column = state[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            console.log('here')
            return {
                ...state,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            }
        }
    }
    return state || {}
}