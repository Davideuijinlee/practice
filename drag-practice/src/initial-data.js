const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'stuff'}, 
        'task-2': { id: 'task-2', content: 'more stuff'}, 
        'task-3': { id: 'task-3', content: 'more more stuff'}, 
        'task-4': { id: 'task-4', content: 'more more more stuff'}, 
        'task-5': { id: 'task-5', content: 'more more more more stuff'}, 
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData;