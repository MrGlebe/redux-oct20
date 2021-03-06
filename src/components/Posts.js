import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

 const Posts = ({posts}) => {

    if(!posts.length) {
        return <p>No posts yet</p>
    }

    return  posts.map( post => <Post post={post} key={post.id} />);
};

 const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
 };


export default connect(mapStateToProps, null)(Posts);
