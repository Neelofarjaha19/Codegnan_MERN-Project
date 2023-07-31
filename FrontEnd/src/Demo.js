import React from "react";

class Demo extends React.Component
{
    state = {
        fileName : "Demo.js",
        location : "E Drive",
        name : "REACTJS"
    }

    // methodName = () => { logic goes here} 
    display = () => {
        // alert("This is an Alert Method Called By Display Method")
        this.setState({
            name : "Angular 16",
            fileName : "Demo.js Component"
        })
    }

    render()
    {
        return(
            <div>
                <h1> Framework : {this.state.name} </h1>
                <h2> File Name : {this.state.fileName} </h2>
                <p> Student Name : {this.props.name} </p>
                {/* props : properties (parent to child information) */}
                <p> Department : {this.props.dept} </p>

                <button onClick={this.display}> Click Me (●'◡'●) </button>
            </div>
        )
    }
}

export default Demo