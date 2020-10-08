import {takeEvery, put, call} from 'redux-saga/effects';
import {showLoading, hideLoading, showAlert} from './actions'

export function* sagasWatcher() {
   yield takeEvery('REQUEST_POSTS', sagaWorker);
}

function* sagaWorker() {
    try{
        yield put(showLoading());
        const posts = yield call(fetchPosts);
        yield put({
            type: 'FETCH_POSTS',
            payload: posts
        });
        yield put(hideLoading());
    } catch(e) {
        yield put(showAlert('Ошибка загрузки'));
        yield put(hideLoading());
    }
}

async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    return await res.json();
}
