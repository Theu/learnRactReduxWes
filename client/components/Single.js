import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { Link } from 'react-router';

export default class Single extends React.Component {
  render() {
    // index of the post
    //   get the post
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[i];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
          <Photo i={i} post={post} {...this.props} />
          <Comments postComments={postComments} {...this.props}/>
      </div>
    );
  }
};
