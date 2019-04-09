/**
 * Dependencies
 */

import React from 'react'
import BlogGrid from './BlogGrid'
import BlogPost from './BlogPost'
import initialState from '../../../data/initialState.json'


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      ...initialState
    }
  }

  render() {
    return  (this.props.param.id)  
      ? this.state.blogPosts.reduce((acc,cur) => {
        if(this.props.param.id === cur.id){
        return <BlogPost post={post}/>
        }else{
          return "put 404 here"
        }
      },this.props.param.id)





      : <BlogGrid allPosts={this.state.blogPosts} />
  }
}

