let _id = 1;
export function uniqueId() {
    return _id++;
}

export function createTask({ title, description }) {
    return {
        type: 'CREATE_TASK',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted'
        },
    }
}

export function updateTask({ id, title, description, status }) {
    return {
        type: 'UPDATE_TASK',
        payload: {
            id,
            title,
            description,
            status
        }
    }
}

export function deleteTask({ id }) {
    return {
        type: 'DELETE_TASK',
        payload: {
            id
        }
    }
}