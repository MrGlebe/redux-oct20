export const createPost = (post) => {
    return {
        type: 'CREATE_POST',
        payload: post
    }
};

export const showLoading = () => {
    return { type: 'SHOW_LOADER'}
};

export const hideLoading = () => {
    return { type: 'HIDE_LOADING'}
};

export const showAlert = (text) => {
    return { type: 'SHOW_ALERT', payload: text}
};

export const hideAlert = () => {
    return { type: 'HIDE_ALERT'}
};

export const fetchPosts = () => {
    return { type: 'REQUEST_POSTS' };
};
