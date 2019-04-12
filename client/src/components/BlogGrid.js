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
    <div style={styles.div}>
      {allPosts.map((post, i) => (
        <BlogPostPreview
          key={i}
          summary={post.summary}
          featuredImg={post.featuredImg}
        />
      ))}
    </div>
  )
}
