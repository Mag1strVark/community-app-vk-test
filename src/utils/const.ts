import { IOption } from '../types/global.ts'

export const privacyGroup: IOption<boolean>[] = [
  {
    title: 'Закрытая',
    value: false,
  },
  {
    title: 'Открытая',
    value: true,
  },
]

export const FriendsList: IOption<boolean>[] = [
  {
    title: 'Да',
    value: true,
  },
  {
    title: 'Нет',
    value: false,
  },
]

export const avatarColours: IOption<string>[] = [
  {
    title: 'Красный',
    value: 'red',
  },
  {
    title: 'Зелёный',
    value: 'green',
  },
  {
    title: 'Жёлтый',
    value: 'yellow',
  },
  {
    title: 'Голубой',
    value: 'blue',
  },
  {
    title: 'Фиолетовый',
    value: 'purple',
  },
  {
    title: 'Белый',
    value: 'white',
  },
  {
    title: 'Оранжевый',
    value: 'orange',
  },
]
