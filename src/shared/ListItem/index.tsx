import { ReactNode } from 'react'
import s from './listItem.module.scss'
import cn from '../../utils/cn.ts'

interface IProps {
  children: ReactNode
}

const ListItem = (props: IProps) => {
  return <div className={cn('flex-space-between', s.block)}>{props.children}</div>
}

export default ListItem
