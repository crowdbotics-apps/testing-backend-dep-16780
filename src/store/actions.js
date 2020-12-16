import * as types from "./constants"
export const universitiesapi_get_search_list = name => ({
  type: types.UNIVERSITIESAPI_GET_SEARCH_LIST,
  name
})

export const universitiesapi_get_search_listSucceeded = (
  response,
  starter
) => ({
  type: types.UNIVERSITIESAPI_GET_SEARCH_LIST_SUCCEEDED,
  response,
  starter
})

export const universitiesapi_get_search_listFailed = (error, starter) => ({
  type: types.UNIVERSITIESAPI_GET_SEARCH_LIST_FAILED,
  error,
  starter
})
