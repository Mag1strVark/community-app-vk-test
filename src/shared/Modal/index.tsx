import ReactDOM from 'react-dom'
import styles from './modal.module.scss'
import { MouseEventHandler, PropsWithChildren } from 'react'
import { htmlBodyElement } from '../../main.tsx'
import { useTransition, a } from '@react-spring/web'
import CloseButton from '../Buttons/CloseButton'

interface IProps {
  onClose: () => void
  isOpen: boolean
}

const Modal = (props: PropsWithChildren<IProps>) => {
  const transition = useTransition(props.isOpen, {
    from: { transform: 'scale(0.1)' },
    enter: { transform: 'scale(1)' },
    leave: { transform: 'scale(0.1)' },
    config: { duration: 200 },
  })

  const handleClick: MouseEventHandler<HTMLDivElement> = (ev) => {
    if (!('className' in ev.target)) return
    ev.stopPropagation()

    if (ev.target.className === styles.shadow) {
      props.onClose()
    }
  }

  const content = transition((style, item) => {
    if (!item) return null

    return (
      <div className={styles.shadow} onClick={handleClick} data-open={props.isOpen}>
        <a.div className={styles.modal} style={{ ...style }}>
          {props.children}
          <CloseButton onClick={props.onClose} className={styles.close} />
        </a.div>
      </div>
    )
  })

  return ReactDOM.createPortal(content, htmlBodyElement)
}

export default Modal
