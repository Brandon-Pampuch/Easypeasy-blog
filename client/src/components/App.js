/**
 * Dependencies
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BlogGrid from './BlogGrid'
import BlogPost from './BlogPost'
import initialState from '../../../data/initialState.json'
import BlogPostPreview from './BlogPostPreview'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ...initialState
    }
  }

  render() {
    console.log(this.state)
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
          exact
          path="/posts"
          render={props => <BlogPostPreview {...props} />}
        />
        <Route
          path="/posts/:id"
          render={props => <BlogPost {...props} post={this.state.blogPosts} />}
        />
        >
      </Switch>
    )
  }
}
