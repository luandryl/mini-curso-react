import React from 'react'

const AppInput = () => (
    <div className="App--task-input center">
        <h1> Todo App </h1>
        <div className="task-input--actions center">
            <input className="App__input" type="text" placeholder="type something and press add" /> 
            <button className="App__button" > Add </button>
        </div>
    </div>
)

export default AppInput;