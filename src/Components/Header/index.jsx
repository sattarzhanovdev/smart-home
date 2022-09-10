import React from 'react'
import cls from './Header.module.scss'

const Header = () => {
  return (
    <div className={cls.header}>
      <h1>Привет</h1>
      <img src="/icons/user.png" alt="" />
    </div>
  )
}

export default Header