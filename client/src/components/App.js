'use strict'

/**
 * Dependencies
 */

import React from 'react'
import { BrowserRouter, Link , Route } from 'react-router-dom'

import BlogGrid from './BlogGrid'
import BlogPost from './BlogPost'
import BlogPostPreview from './BlogPostPreview'
import LandingPage from './LandingPage'


/**
 * Import component styles
 */

import '../styles/App.scss'

/**
 * Import initial data
 */

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

          <header>
            <nav>
              <Link to={"1"}>Login</Link>
              <Link to={"1"}>Sign up</Link>
            </nav>
          </header>
          <Route
            exact
            path="/"
            render={props => (
              <LandingPage {...props} />
            )} 
          />
          <Route
            exact
            path="/blog-grid"
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
     
      </BrowserRouter>
    )
  }
}

export default App
