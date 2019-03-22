import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = props => {
    return (
        <div className="task-list">
            <div className="task-list-title">
                <strong>{props.status}</strong>
            </div>
            {props.tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;