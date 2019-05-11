import React, { Component } from 'react'


let defaultErrorMessage = "Whoops, looks like we have an error:" 

function Whoops({statusCode=500, message=defaultErrorMessage}) {
    return (
        <div className="error whoops">
            {message}
            <div>{statusCode}</div>
        </div>
    )
} 

export default class ErrorBoundary extends Component {
    state = { 
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.error(error.message, '\n', 'More info:', info)   
    }


    render() { 
        return (this.state.hasError) 
            ? <Whoops statusCode={this.props.statusCode} message={this.props.message} />
            : this.props.children
    }
}
