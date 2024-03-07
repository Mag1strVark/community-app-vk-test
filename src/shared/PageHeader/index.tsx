import s from './pageHeader.module.scss'
import { PropsWithChildren } from 'react'
import cn from '../../utils/cn.ts'

interface IProps {
  title: string
}

const PageHeader = (props: PropsWithChildren<IProps>) => {
  return (
    <div className={s.container}>
      <h2 className={cn('text--heading1', 'text-500')}>{props.title}</h2>
      {props.children}
    </div>
  )
}

export default PageHeader
