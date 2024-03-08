import useEntities from '../../../../store/useEntities/useEntities.ts'
import communitiesAtom from '../../communities.atom.ts'
import communitiesApi from '../../communities.api.ts'
import PageHeader from '../../../../shared/PageHeader'
import Loader from '../../../../shared/Loader'
import CommunityItem from '../../components/CommunityItem'
import { useState } from 'react'
import CommunnityModal from '../../components/CommunnityModal'
import Filter from '../../../../shared/Filter'
import { avatarColours, FriendsList, privacyGroup } from '../../../../utils/const.ts'

interface IFilter {
  privacy: boolean | null
  friends: boolean | null
  color: string | null
}

const Communities = () => {
  const { loading, state } = useEntities({
    atom: communitiesAtom,
    itemFetcher: communitiesApi.loadCommunities,
  })
  const [isOpen, setIsOpen] = useState(false)
  const [userId, setUserId] = useState<number | null>(null)
  const userList = state.data.find((user) => user.id === userId)?.friends
  const [filters, setFilters] = useState<IFilter>({
    privacy: null,
    friends: null,
    color: null,
  })

  const handleFilterChange = (value: any, name: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const checkFriend = (id: number) => {
    setUserId(id)
    setIsOpen(true)
  }

  const filteredData = state.data.filter((group) => {
    if (filters.privacy !== null && group.closed === filters.privacy) {
      return false
    }
    if (filters.friends !== null && !!group.friends !== filters.friends) {
      return false
    }
    if (
      filters.color !== null &&
      group.avatar_color?.toLowerCase() !== filters.color.toLowerCase()
    ) {
      return false
    }
    return true
  })

  return (
    <div className="flex-page-center pageContent">
      <PageHeader title="Группы">
        <Filter
          title="Тип приватности:"
          name="privacy"
          categories={privacyGroup}
          onFilterChange={handleFilterChange}
        />
        <Filter
          title="Цвет Автарки:"
          name="color"
          categories={avatarColours}
          onFilterChange={handleFilterChange}
        />
        <Filter
          title="Наличие друзей:"
          name="friends"
          categories={FriendsList}
          onFilterChange={handleFilterChange}
        />
      </PageHeader>
      <div className="flex-page-center">
        {!loading ? (
          <>
            {filteredData.map((group) => (
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
    </div>
  )
}

export default Communities
