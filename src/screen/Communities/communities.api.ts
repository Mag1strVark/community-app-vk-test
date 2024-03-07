import { HTTPResponse } from '../../services/http/http.types.ts'
import { GetGroupsResponse, IPaginatedItems } from '../../types/global.ts'
import http, { handleHttpError, handleHttpResponse } from '../../services/http'

const loadCommunities = (): Promise<HTTPResponse<IPaginatedItems<GetGroupsResponse>>> => {
  return http.get('/community').then(handleHttpResponse).catch(handleHttpError)
}

const communitiesApi = { loadCommunities }

export default communitiesApi
