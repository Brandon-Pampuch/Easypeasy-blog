'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom'

import BlogGrid from './BlogGrid'
import BlogPost from './BlogPost'
import BlogPostPreview from './BlogPostPreview'

import '../sass/app.scss'

import initialState from '../../../data/initialState.json'

/**
 * Define component
 */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState
    }
  }

  render() {
    return (
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
