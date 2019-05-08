import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = { 
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        console.error(error.message, '\n', 'More info:', info)   
    }


    render() { 
        return (this.state.hasError) 
            ? <Whoops statusCode={this.props.statusCode || 500} />
            : this.props.children
    }
}

function Whoops(props) {
    return (
        <div className="error whoops">
            Whoops, looks like we have an error. 
            <div>{props.statusCode}</div>
        </div>
    )
}
 
export default ErrorBoundary
