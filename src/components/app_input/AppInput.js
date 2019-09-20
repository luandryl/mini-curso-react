import React, { Component } from 'react'

class AppInput extends Component {
    
    state = {
        input_task: ''
    }

    handleInput = (e) => { this.setState({input_task: e.target.value}) }
    handleClick = () => {
        const { input_task } = this.state;
        this.setState({input_task: ''})
        this.props.returnTask(input_task)
    }
    render () {
        const { input_task } = this.state;
        return (
            <div className="App--task-input center">
                <h1> Todo App </h1>
                <div className="task-input--actions center">
                    <input value={input_task} onChange={this.handleInput} className="App__input" type="text" placeholder="type something and press add" /> 
                    <button className="App__button" onClick={() => {this.handleClick()}} > Add </button>
                </div>
            </div>
        );
    }
}


export default AppInput;