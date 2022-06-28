const findInArr = (state, source, destination) => {
    let sourceColumn, destColumn;
    Object.entries(state).map(([key,value]) => {
        if(key === source) sourceColumn = value;
        if(key === destination) destColumn = value;
    });
    return { sourceColumn, destColumn };
};




export const changeArrWhenItemIsMove = (payload, state, currentState) => {
    const { source, destination } = payload;
    const { sourceColumn, destColumn } = findInArr(state, source.droppableId, destination.droppableId);
    if(source.droppableId !== destination.droppableId) {
        const sourceItems = [...sourceColumn];
        const destItems = [...destColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, { ...removed, status: { status: destination.droppableId, order: destination.index } });
        const destItemsRes = destItems.map((item,index) => ({ ...item, status: { ...item.status, order: index } }));
        const sourceItemsRes = sourceItems.map((item,index) => ({ ...item, status: { ...item.status, order: index } }));
        const newStateItems = currentState.items.map(item => {
            if(destItemsRes.some(destItem => destItem.id === item.id)) {
                const [newItem] = destItemsRes.filter(destItem => destItem.id === item.id);
                return newItem;
            }
            if(sourceItemsRes.some(destItem => destItem.id === item.id)) {
                const [newItem] = sourceItemsRes.filter(destItem => destItem.id === item.id);
                return newItem;
            }
            return item;
        });
        return {
            ...currentState,
            items: [...newStateItems]
        };
    } 
    else {
        const sourceItems = [...sourceColumn];
        const [removed] = sourceItems.splice(source.index, 1);
        sourceItems.splice(destination.index, 0, { ...removed, status: { status: destination.droppableId } });
        const sourceItemsRes = sourceItems.map((item,index) => ({ ...item, status: { ...item.status, order: index } }));
        const newStateItems = currentState.items.map(item => {
            if(sourceItemsRes.some(destItem => destItem.id === item.id)) {
                const [newItem] = sourceItemsRes.filter(destItem => destItem.id === item.id);
                return newItem;
            }
            return item;
        });
        return {
            ...currentState,
            items: [...newStateItems]
        };
    }
};





// export const changeArrWhenItemIsMove = (payload,state) => {
//     const { source, destination } = payload;
//     console.log(source, destination, payload);
//     const { sourceColumn, destColumn } = findInArr(state,source.droppableId, destination.droppableId);
//         if(source.droppableId !== destination.droppableId) {
//             const sourceItems = [...sourceColumn.items];
//             const destItems = [...destColumn.items];
//             const [removed] = sourceItems.splice(source.index, 1);
//             destItems.splice(destination.index, 0, removed);
//             const newState = state.map(item => {
//                 if(item.id === source.droppableId) {
//                     return {
//                         ...item,
//                         items: sourceItems
//                     };
//                 }
//                 if(item.id === destination?.droppableId) {
//                     return {
//                         ...item,
//                         items: destItems
//                     };
//                 }
//                 return item;
//             });
//             return [...newState];
//         } else {
//             const copiedItems = [...sourceColumn.items];
//             const [removed] = copiedItems.splice(source.index, 1);
//             copiedItems.splice(destination.index, 0, removed);
//             const newState = state.map(item => {
//                 if(item.id === source.droppableId) {
//                     return {
//                         ...item,
//                         items: copiedItems
//                     };
//                 }
//                 return item;
//             });
//             return  [...newState];
//         }
// };


export const addItem = ({ id, state, itemToAdd }) => {
    const newState = state.map(subDesk => {
        if(subDesk.id === id) {
            return {
                ...subDesk,
                items: [...subDesk.items,itemToAdd]
            };
        }
        return subDesk;
    });
    return [...newState];
};