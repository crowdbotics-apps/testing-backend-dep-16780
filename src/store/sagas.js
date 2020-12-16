import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* universitiesapi_get_search_listWorker(action) {
  try {
    const result = yield call(
      apiService.universitiesapi_get_search_list,
      action
    )
    yield put(actions.universitiesapi_get_search_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.universitiesapi_get_search_listFailed(err, action))
  }
}
function* universitiesapi_get_search_listWatcher() {
  yield takeEvery(
    types.UNIVERSITIESAPI_GET_SEARCH_LIST,
    universitiesapi_get_search_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [universitiesapi_get_search_listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
