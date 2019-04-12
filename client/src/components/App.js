/**
 * Dependencies
 */

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import BlogGrid from './BlogGrid'
import BlogPost from './BlogPost'
import initialState from '../../../data/initialState.json'
import BlogPostPreview from './BlogPostPreview'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <BlogGrid {...props} allPosts={this.state.blogPosts} />
          )}
        />
        <Route
          path="/posts/:id"
          render={props => (
            <BlogPost {...props} allPosts={this.state.blogPosts} />
          )}
        />
        >
      </Switch>
    )
  }
}

export default App
