import { FC, useState } from 'react'
import s from './filter.module.scss'
import cn from '../../utils/cn.ts'

interface FilterProps {
  categories: string[]
  onFilterChange: (selectedCategory: string | null) => void
}

const Filter: FC<FilterProps> = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleCategoryChange = (category: string | null) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
      onFilterChange(null)
    } else {
      setSelectedCategory(category)
      onFilterChange(category)
    }
  }

  return (
    <div className={s.filter}>
      <div className={cn(s.filter, s.label)}>Фильтр:</div>
      <div className={cn(s.filter, s.options)}>
        <button
          className={selectedCategory === null ? `${s.active}` : ''}
          onClick={() => handleCategoryChange(null)}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? `${s.active}` : ''}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Filter
