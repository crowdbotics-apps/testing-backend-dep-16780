import * as types from "./constants"

const initialState = { universitiesAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST:
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST_SUCCEEDED:
    case types.UNIVERSITIESAPI_GET_SEARCH_LIST_FAILED:
      return Object.assign({}, state, {
        universitiesAPI: [...state.universitiesAPI, action.response]
      })
    default:
      return state
  }
}
