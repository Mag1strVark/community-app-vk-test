import CloseIcon from '../../../assets/icons/exit.svg?react'
import cn from '../../../utils/cn.ts'

interface IProps {
  onClick: () => void
  className?: string
}

const CloseButton = (props: IProps) => {
  return (
    <div
      className={cn('svg-clickable', 'close-icon', 'hovered-button', props.className)}
      style={{ padding: '2px' }}
      onClick={props.onClick}
    >
      <CloseIcon />
    </div>
  )
}

export default CloseButton
