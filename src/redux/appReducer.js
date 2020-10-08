const initialState = {
    loading: false,
    alert:null
};


export const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SHOW_ALERT':
            return {
                ...state,
                alert: action.payload
            };

        case 'HIDE_ALERT':
            return {
                ...state,
                alert: null
            };

        case 'SHOW_LOADER':
            return  {
                ...state,
                loading: true
            };

        case 'HIDE_LOADING':
            return {
                ...state,
                loading: false
            };

        default:
            return state;
    }
};
