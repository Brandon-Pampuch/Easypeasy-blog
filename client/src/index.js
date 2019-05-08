'use strict'

/**
 * Dependencies
 */

import React from 'react'
import ReactDOM from 'react-dom'
import ErrorBoundary from './components/ErrorBoundary'
import App from './components/App'

/**
 * Render DOM
 */

ReactDOM.render(
    <ErrorBoundary>
        <App className="app" />
    </ErrorBoundary>, 
    document.getElementById('root')
)
