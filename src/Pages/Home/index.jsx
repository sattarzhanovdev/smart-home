import React from 'react'
import Rooms from '../../Components/Rooms'
import cls from './Home.module.scss'

const Home = () => {
  return (
    <div className={cls.container}>
      <Rooms />
    </div>
  )
}

export default Home