import React from 'react'
import { Link } from 'react-router-dom'
import { footer_list } from '../../Utils'
import cls from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={cls.footer}>
      {
        footer_list.map(({id, icon, path}) => (
          <li key={id} 
            onClick={() => {
              navigator.bluetooth.requestDevice({
                filters: [{ name: ''}]
              })
              .then(device => device.gatt.connect())
              .then(server => server.getPrimaryService('HC-05'))
              .then(service => service.getCharacteristic('HC-05'))
              .then(characteristic => {
                return characteristic.writeValue('0');
              })
            }}
          >
            <Link to={path}>
              <img src={icon} alt="" />
            </Link>
          </li>
        ))
      }
    </div>
  )
}

export default Footer