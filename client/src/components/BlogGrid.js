import React, { Component } from 'react'
import BlogPostPreview from './BlogPostPreview'
import { Link } from 'react-router-dom'

const styles = {
  div: {
    textAlign: 'center'
  }
}

export default function BlogGrid({ allPosts }) {
  return (
    <div className="app app__div box" style={styles.div}>
      {allPosts.map((post, i) => (
        <Link key={i} to={`/posts/${post.id}`}>
          <BlogPostPreview
            key={i}
            summary={post.summary}
            featuredImg={post.featuredImg}
          />
        </Link>
      ))}
    </div>
  )
}
