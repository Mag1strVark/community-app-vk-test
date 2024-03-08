import { User } from '../../../../types/global.ts'
import Modal from '../../../../shared/Modal'
import ModalHeader from '../../../../shared/Modal/ModalHeader'

interface IProps {
  onClose: () => void
  isOpen: boolean
  users?: User[]
}

const CommunityModal = (props: IProps) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="flex-column gap-32">
        <ModalHeader onClose={props.onClose} title="Список друзей" />
        {props.users &&
          props.users.map((user) => (
            <span>
              {user.first_name} {user.last_name}
            </span>
          ))}
      </div>
    </Modal>
  )
}

export default CommunityModal
