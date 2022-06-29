export const MOCK_DATA = {
    columns: ['open','planned', 'in-progress', 'done'],
    items: [
        { id:'1',title:'Task #1', description: 'Description task #1', status: { status: 'done', order: 0 }, priority: 'P0' },
        { id:'2',title:'Task #2', description: 'Description task #2', status: { status: 'open', order: 0 }, priority: 'P1' },
        { id:'3',title:'Task #3', description: 'Description task #3', status: { status: 'planned', order: 0 }, priority: 'P5' },
        { id:'4',title:'Task #4', description: 'Description task #4', status: { status: 'planned', order: 1 }, priority: 'P1' },
        { id:'5',title:'Task #5', description: 'Description task #5', status: { status: 'in-progress', order: 0 }, priority: 'P4' },
        { id:'6',title:'Task #6', description: 'Description task #6', status: { status: 'in-progress', order: 1 }, priority: 'P2' },
        { id:'7',title:'Task #7', description: 'Description task #7', status: { status: 'planned', order: 2 }, priority: 'P3' },
        { id:'8',title:'Task #8', description: 'Description task #8', status: { status: 'done', order: 1 }, priority: 'P0' },
        { id:'9',title:'Task #9', description: 'Description task #9', status: { status: 'done', order: 2 }, priority: 'P1' }
    ]
};