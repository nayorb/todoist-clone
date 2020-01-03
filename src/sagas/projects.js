import { call, put, takeEvery } from 'redux-saga/effects'

import Api from '../api'

function* fetchAllResources() {
	try {
		const data = yield call(Api.getResources)
		console.log(data)
		yield put({ type: 'FULL_SYNC_SUCCEEDED', payload: data })
	} catch (e) {
		yield put({ type: 'FULL_SYNC_FAILED', message: e.message })
	}
}

export function* initAppSaga() {
	yield takeEvery('FULL_SYNC_REQUESTED', fetchAllResources)
}
