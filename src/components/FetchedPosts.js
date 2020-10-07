import React from 'react';
import Post from "./Post";

export default ({posts}) => {

    if(!posts) {
        return (
            <>
                <p>No posts yet</p>
                <button className="btn btn-primary">Load posts</button>
            </>
        );
    }

    return  posts.map( post => <Post post={post} key={post} />);

}
