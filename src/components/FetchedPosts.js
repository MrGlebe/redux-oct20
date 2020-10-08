import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Post from "./Post";
import {fetchPosts} from '../redux/actions';

export default () => {

    const dispatch = useDispatch();

    const posts = useSelector(state => state.posts.fetchedPosts);
    const loading = useSelector(state => state.app.loading);

    if(loading) {
        return <p>
            Loading Posts...
        </p>
    }

    if(!posts.length) {
        return (
            <>
                <p>No posts yet</p>
                <button
                    className="btn btn-primary"
                    onClick={() => dispatch(fetchPosts())}
                >
                    Load posts</button>
            </>
        );
    }

    return  posts.map( post => <Post post={post} key={post.id} />);
};


