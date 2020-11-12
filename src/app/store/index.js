import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();
import { taskCreationSaga } from './sagas.mock';

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        name: "New Task",
                        id: action.taskID,
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }]
            }
            return tasks;
        },
        comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
            return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
)

sagaMiddleware.run(taskCreationSaga)