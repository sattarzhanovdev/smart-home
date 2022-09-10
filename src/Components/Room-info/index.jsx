import React from 'react'
import { rooms } from '../../Utils'
import cls from './Room_info.module.scss'

const Room_info = ({room}) => {
  return (
    <div className={cls.page}>
      {
        rooms.map(({id, title, icon, value}) => (
          <div 
            key={id}
            className={cls.room_info}
          >
            <div className={cls.up}>
              <img 
                src={icon} 
                alt={title} 
              />
              <label className={cls.toggle}>
                <input className={cls.toggle_checkbox}type="checkbox" />
                <div className={cls.toggle_switch}></div>
              </label>
            </div>
            <div className={cls.down}>
              <h3>{title}</h3>
            </div>
          </div>
        ))
      }
      <div className={cls.add}>
        <h4><img src="/icons/plus.svg" alt="" /> Добавить новое устройство</h4>
      </div>
    </div>
  )
}

export default Room_info