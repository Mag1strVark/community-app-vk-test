import { Group } from '../../../../types/global.ts'
import ListItem from '../../../../shared/ListItem'

interface IProps {
  groups: Group
}

const CommunityItem = (props: IProps) => {
  return (
    <>
      <ListItem>
        <div className="flex-align-start gap-32">
          <div className="flex-column-max-content gap-4">
            <span>{props.groups.name}</span>
            <span>{props.groups.closed}</span>
            {props.groups.avatar_color && <span>{props.groups.avatar_color}</span>}
            <span>{props.groups.members_count}</span>
            {props.groups.friends && <span>{props.groups.friends.length}</span>}
          </div>
        </div>
      </ListItem>
    </>
  )
}

export default CommunityItem
