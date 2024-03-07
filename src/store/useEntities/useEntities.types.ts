import { IPaginatedItems } from '../../types/global.ts'
import { RecoilState } from 'recoil'
import { HTTPResponse } from '../../services/http/http.types.ts'

export interface EntitiesRecoilState<T extends any> extends IPaginatedItems<T> {
  loaded: boolean
}

export interface IUseEntitiesProps<T extends any> {
  atom: RecoilState<EntitiesRecoilState<T>>
  itemFetcher: () => Promise<HTTPResponse<IPaginatedItems<T>>>
}
