import useEntities from '../../../../store/useEntities/useEntities.ts'
import communitiesAtom from '../../communities.atom.ts'
import communitiesApi from '../../communities.api.ts'
import PageHeader from '../../../../shared/PageHeader'
import Loader from '../../../../shared/Loader'
import CommunityItem from '../../components/CommunityItem'
import { useState } from 'react'
import CommunnityModal from '../../components/CommunnityModal'

const Communities = () => {
  const { loading, state } = useEntities({
    atom: communitiesAtom,
    itemFetcher: communitiesApi.loadCommunities,
  })
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState<number | null>(null)
  const userList = state.data.find((user) => user.id === userId)?.friends
  const checkFriend = (id: number) => {
    setUserId(id)
    setIsOpen(true)
  }

  return (
    <>
      <PageHeader title="Группы" />
      <div className="flex-page-center">
        {!loading ? (
          <>
            {state.data.map((group) => (
              <CommunityItem onOpen={checkFriend} key={group.id} groups={group} />
            ))}
          </>
        ) : (
          <div className="flex-center" style={{ height: '90vh' }}>
            <Loader />
          </div>
        )}
      </div>
      <CommunnityModal
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        users={userList}
      />
    </>
  )
}

export default Communities
