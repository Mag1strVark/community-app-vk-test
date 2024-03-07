import { Group, IPaginatedItems } from '../../types/global.ts'
import { atom } from 'recoil'

export interface ICommunityState extends IPaginatedItems<Group> {
  loaded: boolean
}

const CommunitiesAtom = atom<ICommunityState>({
  key: 'communities',
  default: {
    loaded: false,
    data: [],
  },
})

export default CommunitiesAtom
