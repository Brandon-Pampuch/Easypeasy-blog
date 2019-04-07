/**
 * Dependencies
 */

import React from 'react'
import BlogGrid from './BlogGrid'
import initialState from '../../../data/initialState.json'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ...initialState
    }
  }

  render() {
    return <BlogGrid allPosts={this.state.blogPosts} />
  }
}

