import { uniqueId } from '../actions'

const mockTasks = [
    {
        id: uniqueId(),
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: uniqueId(),
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];


export default function tasks(state = { tasks: mockTasks }, action) {
    switch (action.type) {

        case action.type === 'CREATE_TASK':
            return { tasks: state.tasks.concat(action.payload) };

        case action.type === 'UPDATE_TASK':
            return state.tasks.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        title: action.payload.title,
                        description: action.payload.description,
                        status: action.payload.status
                    }
                }
                return item;
            })

        case action.type === 'DELETE_TASK':
            return state.tasks.filter(item => item.id !== action.payload.id);

        default:
            return state;

    }
}