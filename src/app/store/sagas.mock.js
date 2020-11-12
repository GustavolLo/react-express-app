import {
    take,
    put,
    select
} from 'redux-saga/effects';

import * as mutations from './mutations';
import { v4 as uuid } from 'uuid';

export function* taskCreationSaga() {
    while(true) {
        const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);
        console.log("Got group ID ", groupID);
        const taskID = uuid();
        const ownerID = "U1";
        yield put(mutations.createTask(taskID, groupID, ownerID))
    }
}
