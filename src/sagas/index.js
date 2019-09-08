import {put, takeLatest, all} from 'redux-saga/effects'

function* fetchNews() {
    const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-08-08&sortBy=publishedAt&apiKey=cc799a350c344be695c76621c08b8c1c')
    .then(res => res.json())
    yield put({type: 'NEWS_RECIEVED', articles:json.articles})
}

function* actionWatcher() {
    yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}