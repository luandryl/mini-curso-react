import React from 'react';
import Icon from '../../assets/icons/Icon'

const TaskCard = (props) => (
    <div className="task--card">
        <span>{props.task.name}</span>
            <div className="card--controls">
            <Icon type="trash" />
            <div className="div"> </div>
            <Icon type="arrow" />
        </div>
    </div>
)



export default TaskCard