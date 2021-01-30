import {put,takeLatest,all} from 'redux-saga/effects';
import { GET_NEWS,NEWS_RECEIVED } from '../Actions';

function* fetchNews(){
    const json=yield fetch('http://newsapi.org/v2/everything?q=tesla&from=2020-12-29&sortBy=publishedAt&apiKey=851f7a19f59f4f7a9b6aea201f5175ce').then(response=>response.json());
    console.log("JSON   :",json)
    yield put({type:'NEWS_RECEIVED',json:json.articles})
}

function* actionWatcher(){
    yield takeLatest(GET_NEWS,fetchNews);
}

export default function* rootSaga(){
    yield all([
        actionWatcher(),
    ])
}