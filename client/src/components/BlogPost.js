import React from 'react'
import { withRouter } from 'react-router-dom'

import ErrorBoundary from './ErrorBoundary'

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    border: '2px solid black',
    boxShadow: '2px 2px 2px rgba(50,50,50,.8)'
  },

  header: {
    margin: '0 auto',
    width: '80%'
  }
}

function BlogPost({ allPosts, match }) {
  const post = allPosts.find(post => post.id === match.params.id)
  return (
    <ErrorBoundary statusCode={404}>
      <div className="app__div box box--large" style={styles}>
        <h1>{post.title}</h1>
        <figure>
          <img className="app__img" src={post.featuredImg.src} />
          <figcaption>{post.featuredImg.caption}</figcaption>
        </figure>
        <div>{post.body}</div>
      </div>
    </ErrorBoundary>
  )
}

export default withRouter(BlogPost)
