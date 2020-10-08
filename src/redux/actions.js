export const createPost = (post) => {
    return {
        type: 'CREATE_POST',
        payload: post
    }
};

export const fetchPosts = () => {

    return async dispatch => {

        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const json = await res.json();

        dispatch({
            type: 'FETCH_POSTS',
            payload: json
        });
    }
};
