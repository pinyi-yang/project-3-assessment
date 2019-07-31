import React from 'react';

const Posts = props => (
  props.posts.map(post => (
    <div className='post'>
      User Id: {post.userId} <br/><br/>
      {post.title} <br/><br/>
      {post.body} <br/><br/>
    </div>
  ))
)


export default Posts;