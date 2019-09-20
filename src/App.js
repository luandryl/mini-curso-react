import React, { Component } from 'react';
import './App.css';
import TaskCard from './components/task_card/TaskCard'
import AppInput from './components/app_input/AppInput'
import AppFooter from './components/app_footer/AppFooter'


class App extends Component {

	state = {
		list: [{
			id: 0,
			name: 'make todo',
			status: 0
		},{
			id: 1,
			name: 'learn git',
			status: 0
		},{
			id: 3,
			name: 'learn js',
			status: 0
		},{
			id: 4,
			name: 'Learn DS in C',
			status: 1
		},{
			id: 5,
			name: 'Learn React',
			status: 1
		},{
			id: 6,
			name: 'Homework',
			status: 2
		}]
	}

	render () {

		const { list } = this.state
		
		const todoTaskList = list.map(task => {
			return (task.status === 0) && (<TaskCard task={task} />)
		})

		const doingTaskList = list.map(task => {
			return (task.status === 1) && (<TaskCard task={task} />)
		})

		const doneTaskList = list.map(task => {
			return (task.status === 2) && (<TaskCard task={task} />)
		})
		
		return (
			<div className="App center">
	
				<div className="App--wrapper center">

					<AppInput />

					<div className="App--task-list center">

						<div className="task--list-wrapper">
							<h1> Todo </h1>
							<div className="task--list">
								{todoTaskList}
							</div>
						</div>

						<div className="task--list-wrapper">
							<h1> Doing </h1>
							<div className="task--list">
								{doingTaskList}
							</div>
						</div>

						<div className="task--list-wrapper">
							<h1> Done </h1>
							<div className="task--list">
								{doneTaskList}
							</div>
						</div>

					</div>
				</div>

				<AppFooter />

			</div>
		);
	}
}

export default App;
