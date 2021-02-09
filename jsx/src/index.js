// import React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
// create a React component
// const App = function() {
const App = () => {
    return (
        <div>
            <label className="label" for="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    )
}
// show React component on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)