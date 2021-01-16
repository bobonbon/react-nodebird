import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import postSaga from './post';
import userSaga from './user';

axios.defaults.baseURL = 'http://localhost:3065';
axios.defaults.withCredentials = true;
/*
take: 일회성
takeEvey: 다회성이지만 동시에 같은 걸 여러번 하면 다 처리됨 중복
takeLatest: 프론트에서 중복 요청이 되어도 서버에서 하나만 불러옴(서버에서 중복 데이터 검사 필요)
throttle: 시간을 정해 그 시간 안에 중복요청 전달 x 한번만 전달
*/

export default function* rootSage() {
    yield all([ //all: 동시에 실행
        fork(postSaga),   //call
        fork(userSaga),
    ])
}