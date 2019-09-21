import React, { Component } from 'react';
import './App.css';
import TaskCard from './components/task_card/TaskCard'
import AppInput from './components/app_input/AppInput'
import AppFooter from './components/app_footer/AppFooter'
import id from 'uuid'
import LocalStorage from './services/LocalStorage'

class App extends Component {

	state = {
		list: []
	}

	saveTask = (task) => {
		const newTask = {
			id: id(),
			name: task,
			status: 0
		}
		LocalStorage.save(newTask)
		this._loadData()
	}

	changeStatus = (id) => {
		LocalStorage.change(id)
		this._loadData()
	}

	deleteTask = (id) => {
		LocalStorage.remove(id)
		this._loadData()
	}

	clearTaskList = () => {
		LocalStorage.clear()
		this._loadData()
	}

	_loadData () {
		this.setState({list: LocalStorage.load()})
	}

	componentWillMount () {
		this._loadData()
	}

	render () {

		const { list } = this.state
		
		const todoTaskList = list.map(task => {
			return (task.status === 0) 
				&& (<TaskCard 
						deleteTask={this.deleteTask} 
						changeStatus={this.changeStatus} 
						key={task.id} 
						task={task} 
					/>)
		})

		const doingTaskList = list.map(task => {
			return (task.status === 1) 
				&& (<TaskCard 
						deleteTask={this.deleteTask} 
						changeStatus={this.changeStatus} 
						key={task.id} 
						task={task} 
					/>)
		})

		const doneTaskList = list.map(task => {
			return (task.status === 2) 
				&& (<TaskCard 
						deleteTask={this.deleteTask} 
						key={task.id} 
						task={task} 
					/>)
		})
		
		return (
			<div className="App center">
	
				<div className="App--wrapper center">

					<AppInput clear={this.clearTaskList} returnTask={this.saveTask} />

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
