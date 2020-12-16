import axios from "axios"
const universitiesAPI = axios.create({
  baseURL: "http://universities.hipolabs.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function universitiesapi_get_search_list(action) {
  return universitiesAPI.get(`/search`, null, { params: { name: action.name } })
}
export const apiService = { universitiesapi_get_search_list }
