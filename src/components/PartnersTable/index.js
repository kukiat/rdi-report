import React, { useState } from 'react'
import classNames from 'classnames'
import OutsideClickHandler from 'react-outside-click-handler';
import './index.css'

const PartnersTableItem = ({
  active,
  onFilterPartnerType,
  type,
  name,
}) => {
  return (
    <div
      className={classNames('list-item', { active })}
      onClick={() => onFilterPartnerType(type)}
    >
      <div className="list-content">{name}</div>
    </div>
  )
}

const PartnersTable = ({ onFilterSubType, partnersType, onFilterPartnerType, type, filterSubType }) => {
  const [isOpenDropdown, setDropdown] = useState([false, false, false, false])

  const getSubType = () => {
    return partnersType.find(partner => partner.type === type).subType
  }
  const getIndexType = (type) => {
    return {
      all: 0,
      MANUFACTURING: 1,
      SERVICES: 2,
      SALES: 3
    }[type]
  }

  const setNewDropDown = (_type) => {
    setDropdown(isOpenDropdown.map((bool, i) => i === getIndexType(_type) && !bool))
  }

  return (
    <div className='partner-table-container'>
      <OutsideClickHandler onOutsideClick={() => setDropdown([false, false, false, false])}>
        <div className='partner-table-list'>
          {
            partnersType.map((partner, index) => (
              <div css={{ position: 'relative' }} key={index}>
                <PartnersTableItem
                  active={type === partner.type}
                  onFilterPartnerType={(type) => {
                    onFilterPartnerType(type, () => setNewDropDown(type))
                  }}
                  {...partner}
                />
                {isOpenDropdown[index] && (
                  <div className='dropdown-list'>
                    {
                      getSubType().map(((subType, i) => (
                        <div key={i} className='dropdown-item' onClick={() => {
                          onFilterSubType(subType.type, () => setNewDropDown(type))
                        }}>
                          {subType.name}
                        </div>
                      )))
                    }
                  </div>
                )}
              </div>
            ))
          }
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default PartnersTable
