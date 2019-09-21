import React from 'react';
import Icon from '../../assets/icons/Icon'

const TaskCard = (props) => (
    <div className="task--card">
        <span>{props.task.name}</span>
            <div className="card--controls">
            <div onClick={() => {props.deleteTask(props.task.id)}}>
                <Icon type="trash" />
            </div>
            {props.task.status !== 2 && (<div className="div"> </div>)}
            {props.task.status !== 2 && (
                <div onClick={() => {props.changeStatus(props.task.id)}} >
                    <Icon type="arrow" />
                </div>
            )}
        </div>
    </div>
)



export default TaskCard