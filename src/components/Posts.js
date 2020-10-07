import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';

 const Posts = ({posts}) => {

    if(!posts) {
        return <p>No posts yet</p>
    }

    return  posts.map( post => <Post post={post} key={post} />);
};

 const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
 };

 const mapDispatchToProps = dispatch => {

 };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
