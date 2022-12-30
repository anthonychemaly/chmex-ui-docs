import React from 'react'
import { Typography } from 'chmex-ui'

import './styles.css'

import chevronWhite from '../../assets/down-chevron.png'
import chevronBlack from '../../assets/down-chevron-black.png'

const SideBarItem = ({
  label,
  itemChildren = [],
  isOpen,
  onClick,
  isDarkMode
}) => {
  return (
    <div className='sidebar-item'>
      <div className={'sidebar-link'} onClick={onClick}>
        <div className={'wrapper'}>
          <Typography kind='h6' style={{ margin: 0, fontSize: 15 }}>
            {label}
          </Typography>
          <img
            alt='chevron'
            src={isDarkMode ? chevronWhite : chevronBlack}
            className={`chevron ${isOpen && 'chevron-rotated'}`}
          />
        </div>
      </div>
      <div className={`links ${isOpen ? 'links-show' : 'links-hidden'}`}>
        {itemChildren.map(({ section_id: link }) => (
          <div
            key={link.id}
            className={'sidebar-link'}
            onClick={() => {
              window.location.href = '/#' + link.title
            }}
          >
            <div className={'wrapper'}>
              <Typography kind='h6' style={{ margin: 0, fontSize: 15 }}>
                {link.title}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBarItem
