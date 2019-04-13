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

const PartnersTable = ({ onFilterSubType, partnersType, onFilterPartnerType, type }) => {
  const [isOpenDropdown, setDropdown] = useState([false, false, false, false])

  const getSubType = () => {
    return partnersType.find(partner => partner.type === type).subType
  }

  const setNewDropDown = (indexType) => {
    setDropdown(isOpenDropdown.map((bool, i) => i === indexType && !bool))
  }

  return (
    <div className='partner-table-container'>
      <OutsideClickHandler onOutsideClick={() => setDropdown([false, false, false, false])}>
        <div className='partner-table-list'>
          {
            partnersType.map((partnerType, indexType) => (
              <div
                className={classNames('partner-table-item', partnerType.type.toLowerCase())}
                key={indexType}
              >
                <PartnersTableItem
                  active={type === partnerType.type}
                  onFilterPartnerType={(type) => {
                    onFilterPartnerType(type, () => setNewDropDown(indexType))
                  }}
                  {...partnerType}
                />
                {
                  isOpenDropdown[indexType] && (
                    <div className='dropdown-list'>
                      {
                        getSubType().map(((subType, i) => (
                          <div
                            key={i}
                            className='__dropdown-item'
                            onClick={() => {
                              onFilterSubType(subType.type, () => setNewDropDown(indexType))
                            }}
                          >
                            {subType.name}
                          </div>
                        )))
                      }
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default PartnersTable
