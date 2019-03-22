import React from 'react';

const TaskItem = props => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
            </div>
            <div className="task-body">{props.task.description}</div>
            <hr />
        </div>
    );
}

export default TaskItem;