import { Group } from '../../../../types/global.ts'
import ListItem from '../../../../shared/ListItem'

interface IProps {
  onOpen: (id: number) => void
  groups: Group
}

const CommunityItem = (props: IProps) => {
  const handleOpenFriends = () => {
    if (props.groups.id) {
      props.onOpen(props.groups.id)
    }
  }

  return (
    <ListItem>
      <div className="flex-align-start gap-32">
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '100px',
            border: `2px solid ${props.groups.avatar_color ? props.groups.avatar_color : 'black'}`,
          }}
        ></div>
        <div className="flex-column-max-content gap-4">
          <span>{props.groups.name}</span>
          <span>{props.groups.closed ? 'Группа закрытая' : 'Группа открытая'}</span>
          <span>Кол-во подписчиков: {props.groups.members_count}</span>
          {props.groups.friends && (
            <span onClick={handleOpenFriends} style={{ cursor: 'pointer' }}>
              Друзья
            </span>
          )}
        </div>
      </div>
    </ListItem>
  )
}

export default CommunityItem
