import { all, fork } from 'redux-saga/effects'

import * as projectsSagas from './projects'

export default function*() {
	yield all([...Object.values(projectsSagas).map(fork)])
}
