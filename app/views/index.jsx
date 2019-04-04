'use strict'

/**
 * Dependencies
 */

const React = require('react')

/**
 * Define component
 */

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}. My friend!</div>
  }
}

/**
 * Export component
 */

module.exports = HelloMessage
