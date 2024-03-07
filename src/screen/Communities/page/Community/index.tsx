import useEntities from '../../../../store/useEntities/useEntities.ts'
import communitiesAtom from '../../communities.atom.ts'
import communitiesApi from '../../communities.api.ts'
import PageHeader from '../../../../shared/PageHeader'
import Loader from '../../../../shared/Loader'
import CommunityItem from '../../components/CommunityItem'

const Communities = () => {
  const { loading, state } = useEntities({
    atom: communitiesAtom,
    itemFetcher: communitiesApi.loadCommunities,
  })

  console.log(state.data)
  return (
    <>
      <PageHeader title="Группы" />
      <div className="flex-page-center">
        {!loading ? (
          <>
            {state.data.map((group) => (
              <CommunityItem key={group.id} groups={group} />
            ))}
          </>
        ) : (
          <div className="flex-center" style={{ height: '70vh' }}>
            <Loader />
          </div>
        )}
      </div>
    </>
  )
}

export default Communities
