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
    if  (
        currentState.columns.indexOf(source.droppableId) > currentState.columns.indexOf(destination.droppableId) + 1 || 
        currentState.columns.indexOf(source.droppableId) < currentState.columns.indexOf(destination.droppableId) - 1
    ) return { ...currentState };
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

export const addItem = ({ state,itemToAdd }) => {
    return {
        ...state,
        items: [...state.items, itemToAdd]
    };
};

export const updateItem = ({ state,itemToUpdate }) => {
    const newItems = state.items.map(item => {
        if(item.id === itemToUpdate.id) return itemToUpdate;
        return item;
    });
    return {
        ...state,
        items: [...newItems]
    };
};