import React from 'react';
import './App.css';
import Icon from './assets/icons/Icon'

function App() {
	return (
		<div className="App center">

			<div className="App--wrapper center">

				<div className="App--task-input center">
					<h1> Todo App </h1>
					<div className="task-input--actions center">
						<input className="App__input" type="text" placeholder="type something and press add" /> 
						<button className="App__button" > Add </button>
					</div>

				</div>

				<div className="App--task-list center">
					<div className="task--list-wrapper">
						<h1> Todo </h1>

						<div className="task--list">

							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>
							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>
							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>
						</div>

					</div>
					<div className="task--list-wrapper">
						<h1> Doing </h1>

						<div className="task--list">

							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>
							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>

						</div>

					</div>
					<div className="task--list-wrapper">
						<h1> Done </h1>

						<div className="task--list">

							<div className="task--card">
								<span> Make Todo </span>
									<div className="card--controls">
									<Icon type="trash" />
									<div className="div"> </div>
									<Icon type="arrow" />
								</div>
							</div>

							</div>

					</div>
				</div>


			</div>
			<div className="App--footer center">
				<span>make with for </span> <Icon type="heart" className="space" /> <span>unectJr trainees</span>
			</div> 
		</div>
	);
}

export default App;
