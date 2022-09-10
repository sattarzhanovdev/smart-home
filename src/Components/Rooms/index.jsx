import React from 'react'
import { pages } from '../../Utils'
import Room_info from '../Room-info'
import cls from './Rooms.module.scss'

const Rooms = () => {
  const [ room, setRoom ] = React.useState('Все квартиры')

  return (
    <div className={cls.room}>
      <div className={cls.room_scroll}>
        {
          pages.map(({id, title, value}) => (
            <li
              key={id}
              onClick={() => {
                setRoom(title)
              }}
            >
              {title}
            </li>
          ))
        }
      </div>

      <Room_info room={room}/>
    </div>
  )
}

export default Rooms