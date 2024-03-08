import { useState } from 'react'
import s from './filter.module.scss'
import cn from '../../utils/cn.ts'
import { IOption } from '../../types/global.ts'

interface IProps {
  name: string
  title: string
  categories: IOption<any>[]
  onFilterChange: (value: any, name: string) => void
}

const Filter = (props: IProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryChange = (category: string | null, name: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      props.onFilterChange(null, name)
    } else {
      setSelectedCategory(category)
      props.onFilterChange(category, name)
    }
  }

  return (
    <div className={s.filter}>
      <div className={cn(s.filter, s.label)}>{props.title}</div>
      <div className={cn(s.filter, s.options)}>
        <button
          className={selectedCategory === null ? `${s.active}` : ''}
          onClick={() => handleCategoryChange(null, props.name)}
        >
          Все
        </button>
        {props.categories.map((option) => (
          <button
            key={option.value}
            className={selectedCategory === option.value ? `${s.active}` : ''}
            onClick={() => handleCategoryChange(option.value, props.name)}
          >
            {option.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
