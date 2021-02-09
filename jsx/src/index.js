// import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
// create a React component
// const App = function() {

// function getButtonText() {
//     return 'Click on me!'
// }

const App = () => {
    const buttonText = 'Click me'

    return (
        <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
        </div>
    )
}
// show React component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)