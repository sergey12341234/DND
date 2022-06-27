import uuid from 'uuid/v4'


export const INITIAL_STATE = [
    {
        id: uuid(),
        content: 'first',
        items: [
            { id:uuid(), content: '1 tusk' },
            { id:uuid(), content: '2 tusk' },
            { id:uuid(), content: '3 tusk' },
            { id:uuid(), content: '4 tusk' }
        ]
    },
    {
        id: uuid(),
        content: 'second',
        items: []
    },
    {
        id: uuid(),
        content: 'third',
        items: []
    },
]